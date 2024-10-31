import React, { useState } from 'react';
import { Sparkles, AlertCircle, Loader, ExternalLink, Briefcase, Building2, User, FileText, Copy, Check } from 'lucide-react';
import { MBTIType } from '../types';
import { OpenAI } from 'openai';

interface CareerInfo {
  age: string;
  occupation: string;
  experience: string;
  concerns: string;
}

interface GPTAnalysisProps {
  mbtiType: MBTIType;
  onClose: () => void;
}

export const GPTAnalysis: React.FC<GPTAnalysisProps> = ({ mbtiType, onClose }) => {
  const [apiKey, setApiKey] = useState('');
  const [analysis, setAnalysis] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showInput, setShowInput] = useState(true);
  const [copied, setCopied] = useState(false);
  const [careerInfo, setCareerInfo] = useState<CareerInfo>({
    age: '',
    occupation: '',
    experience: '',
    concerns: ''
  });

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(analysis);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  const handleAnalysis = async () => {
    setLoading(true);
    setError('');
    
    try {
      const openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true });
      
      const prompt = `あなたはキャリアカウンセリングの専門家です。以下の情報に基づいて、具体的なキャリアアドバイスを提供してください：

個人情報：
- 年齢: ${careerInfo.age}歳
- 現在の職業: ${careerInfo.occupation}
- 職務経験: ${careerInfo.experience}
- 現在の悩み: ${careerInfo.concerns}

MBTIタイプ: ${mbtiType.type}
タイトル: ${mbtiType.title}
基本的な特徴: ${mbtiType.description}

以下の観点から、具体的で実践的なキャリアアドバイスを提供してください：

1. 現在の状況分析
   - 強みと課題の特定
   - 現在の職務との適性評価

2. キャリア展望
   - あなたのMBTIタイプに特に適している職種や役割
   - 具体的なキャリアパスの提案（3-5年後のゴール設定を含む）

3. スキル開発計画
   - 習得すべき具体的なスキルや資格
   - 推奨される学習方法や教材

4. 行動計画
   - 短期的な目標（3ヶ月以内）
   - 中期的な目標（1年以内）
   - 長期的なキャリアビジョン（3-5年）

5. ネットワーキング戦略
   - 業界内での人脈形成方法
   - 推奨される業界イベントやコミュニティ

できるだけ具体的な例を挙げながら、実践的なアドバイスを提供してください。`;

      const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          { role: "system", content: "あなたは経験豊富なキャリアカウンセラーです。" },
          { role: "user", content: prompt }
        ],
        temperature: 0.7,
      });

      setAnalysis(response.choices[0].message.content || '');
      setShowInput(false);
    } catch (err) {
      setError('APIキーが無効か、分析中にエラーが発生しました。');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-2xl w-full mx-4 text-center">
          <Loader className="w-8 h-8 text-purple-400 animate-spin mx-auto mb-4" />
          <p className="text-purple-200">専門家によるキャリア分析を生成中...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-2xl w-full mx-auto my-16">
        {showInput ? (
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Briefcase className="w-6 h-6 text-purple-400" />
              <h3 className="text-2xl font-bold text-white">専門家の精密診断</h3>
              <Briefcase className="w-6 h-6 text-purple-400" />
            </div>

            <p className="text-purple-200 text-center mb-6">
              より詳細なキャリアアドバイスのため、以下の情報を入力してください。
            </p>

            <div className="space-y-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-purple-200">
                    <User className="w-4 h-4" />
                    年齢
                  </label>
                  <input
                    type="number"
                    value={careerInfo.age}
                    onChange={(e) => setCareerInfo(prev => ({ ...prev, age: e.target.value }))}
                    placeholder="例: 28"
                    className="w-full px-4 py-3 bg-white/5 border border-purple-500/20 rounded-lg text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-purple-200">
                    <Building2 className="w-4 h-4" />
                    現在の職業
                  </label>
                  <input
                    type="text"
                    value={careerInfo.occupation}
                    onChange={(e) => setCareerInfo(prev => ({ ...prev, occupation: e.target.value }))}
                    placeholder="例: ソフトウェアエンジニア"
                    className="w-full px-4 py-3 bg-white/5 border border-purple-500/20 rounded-lg text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-purple-200">
                    <FileText className="w-4 h-4" />
                    職務経験
                  </label>
                  <textarea
                    value={careerInfo.experience}
                    onChange={(e) => setCareerInfo(prev => ({ ...prev, experience: e.target.value }))}
                    placeholder="例: Webアプリケーション開発3年、プロジェクトマネジメント1年"
                    className="w-full px-4 py-3 bg-white/5 border border-purple-500/20 rounded-lg text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-500 min-h-[100px]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-purple-200">
                    <AlertCircle className="w-4 h-4" />
                    現状の悩み
                  </label>
                  <textarea
                    value={careerInfo.concerns}
                    onChange={(e) => setCareerInfo(prev => ({ ...prev, concerns: e.target.value }))}
                    placeholder="例: キャリアの方向性が不明確、マネジメントへの移行を検討中"
                    className="w-full px-4 py-3 bg-white/5 border border-purple-500/20 rounded-lg text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-500 min-h-[100px]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-purple-200">
                    <ExternalLink className="w-4 h-4" />
                    OpenAI APIキー
                  </label>
                  <input
                    type="password"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    placeholder="OpenAI APIキーを入力"
                    className="w-full px-4 py-3 bg-white/5 border border-purple-500/20 rounded-lg text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-500"
                  />
                  <a
                    href="https://platform.openai.com/api-keys"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-purple-300 hover:text-purple-200 text-sm transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    APIキーを取得
                  </a>
                </div>
              </div>

              {error && (
                <div className="flex items-center gap-2 text-red-400 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  <span>{error}</span>
                </div>
              )}

              <div className="flex gap-4 justify-center">
                <button
                  onClick={onClose}
                  className="px-6 py-3 bg-white/10 text-purple-200 rounded-lg hover:bg-white/20 transition-all"
                >
                  キャンセル
                </button>
                <button
                  onClick={handleAnalysis}
                  disabled={!apiKey || !careerInfo.age || !careerInfo.occupation}
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  キャリア分析を開始
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-purple-400" />
                <h3 className="text-2xl font-bold text-white">キャリア分析結果</h3>
                <Briefcase className="w-6 h-6 text-purple-400" />
              </div>
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all text-purple-200"
                title="分析結果をコピー"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>コピーしました</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>コピーする</span>
                  </>
                )}
              </button>
            </div>

            <div className="prose prose-invert max-w-none space-y-4">
              {analysis.split('\n\n').map((paragraph, index) => (
                paragraph ? (
                  <p key={index} className="text-purple-200 leading-relaxed">
                    {paragraph}
                  </p>
                ) : null
              ))}
            </div>

            <button
              onClick={onClose}
              className="mt-8 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all mx-auto block"
            >
              閉じる
            </button>
          </div>
        )}
      </div>
    </div>
  );
};