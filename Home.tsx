/* Design Philosophy: Organic Brutalism with Playful Energy
 * - Warm earthy colors: terracotta, beige, forest green, coral
 * - Irregular shapes with thick borders and rotation
 * - Hand-drawn aesthetic with textured backgrounds
 * - Playful animations and interactions
 */

import { useEffect, useState } from "react";
import { Clock, TrendingUp, DollarSign, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AutomationData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  timeSaved: string;
  difficulty: string;
  example: string;
  imageUrl: string;
  icon: any;
}

const automations: AutomationData[] = [
  {
    id: 1,
    title: "Daily News & Research Digest",
    subtitle: "Stay informed without the time sink",
    description: "Transform the time-consuming task of staying informed into a seamless morning routine. Manus automatically gathers news from multiple trusted sources, filters content based on your interests, and delivers a beautifully formatted digest directly to your inbox or dashboard.",
    benefits: [
      "Save 30-60 minutes daily on news browsing",
      "Get balanced perspectives from diverse sources",
      "Never miss critical updates in your field"
    ],
    timeSaved: "20-40 hours",
    difficulty: "Beginner-Friendly",
    example: "A marketing professional tracks competitor activities, industry trends, and digital marketing news. Each morning at 7 AM, they receive a digest covering new product launches, trending strategies, algorithm updates, and relevant case studies. What previously required checking 15+ websites now arrives as a single, actionable report.",
    imageUrl: "https://private-us-east-1.manuscdn.com/sessionFile/kpcq7gS3MtvzRMWxKmwyB3/sandbox/rNixv5dECVjTaW8UDgsfuW-img-2_1771135821000_na1fn_bmV3cy1kaWdlc3QtYXV0b21hdGlvbg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUva3BjcTdnUzNNdHZ6Uk1XeEttd3lCMy9zYW5kYm94L3JOaXh2NWRFQ1ZqVGFXOFVEZ3NmdVctaW1nLTJfMTc3MTEzNTgyMTAwMF9uYTFmbl9ibVYzY3kxa2FXZGxjM1F0WVhWMGIyMWhkR2x2YmcucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=qbMceehPTgC6hyS9yQ1M7eWFz5KMk6TlbCNsR59xgt246E7TKrcjSmVh-QechJguHHb3h~3SZX00EVAEV1fi~2g~gKaafLnSZng2qgF7z45t6S3QtIA0mU-vtmhyfFUxkaA7U-gLssDNu0V0Od4PJPk3VB9Ggyj3O6QX6334dapPslia6hB7~jvb4rcwOjslD6xw~vfoHveRcgkiyQ0tZ3j~t~WL2vqNl0ANNmIPUDiIQu68GuvSe68pnQYHFq3854v~XqEtOROpMVA6x3NPf16qpef5cHSwyXueF4YYK0mJdJPgz4HWhb~pCYFJAoUG-2mmJb2pHzyEpg6GsWqMcg__",
    icon: Clock
  },
  {
    id: 2,
    title: "Expense Tracking & Financial Reports",
    subtitle: "Automate your financial clarity",
    description: "Eliminate the tedious process of manually tracking expenses and creating financial reports. Manus automatically collects expense data from various sources, categorizes transactions intelligently, identifies spending patterns, and generates comprehensive monthly financial reports with interactive visualizations.",
    benefits: [
      "Save 2-3 hours monthly on expense tracking",
      "Get instant clarity on spending patterns",
      "Simplify tax preparation with organized records"
    ],
    timeSaved: "24-36 hours",
    difficulty: "Beginner to Intermediate",
    example: "A freelance designer uses this automation to manage both personal and business expenses. Manus automatically processes receipts from email, categorizes software subscriptions, client-related travel, and equipment purchases. Each month, they receive a report showing total business expenses by category, comparison with previous months, tax-deductible expense summaries, and recommendations for subscription optimization.",
    imageUrl: "https://private-us-east-1.manuscdn.com/sessionFile/kpcq7gS3MtvzRMWxKmwyB3/sandbox/rNixv5dECVjTaW8UDgsfuW-img-3_1771135820000_na1fn_ZXhwZW5zZS10cmFja2luZy1hdXRvbWF0aW9u.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUva3BjcTdnUzNNdHZ6Uk1XeEttd3lCMy9zYW5kYm94L3JOaXh2NWRFQ1ZqVGFXOFVEZ3NmdVctaW1nLTNfMTc3MTEzNTgyMDAwMF9uYTFmbl9aWGh3Wlc1elpTMTBjbUZqYTJsdVp5MWhkWFJ2YldGMGFXOXUucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=mw-2WtEV18XVyzKQCFkgubX7HLDZy8HnZ3Zwy5IMWeEyFMh-d8h9FhhdMBYCG-4knbJtfb95xumBJ-bhC~M4KTRpGxnDCSc0t~st3MaD9rUKwPG8WKiFOGYlDGN7nEP8eu5FOcrADmjVfYhBmujzEDbcM0qS4VFyi8D7rX5GcBHZY-2ZfxNrd~JKLm3lEMcnyGuv8pvmxjJeYt8EYuFJAIUBktpNOXaUonazpvhaxvYmFnWRAXOd6Ql0SubS6u0rbCyJrICkZ~LTR6uPX25RcJ3HHHE~RKdIA-yPTtu1yptQB0gtQcQYf4PKQ339QtiOu25wAwNaT6QzeAiSSiC8oQ__",
    icon: DollarSign
  },
  {
    id: 3,
    title: "Social Media Content Research",
    subtitle: "Data-driven content strategy on autopilot",
    description: "Transform social media strategy from guesswork into data-driven decision-making. Manus continuously monitors trending topics in your industry, analyzes competitor content performance, identifies content gaps and opportunities, and generates a comprehensive content calendar with ready-to-use ideas backed by research.",
    benefits: [
      "Save 3-5 hours weekly on content research",
      "Increase engagement with data-driven topics",
      "Maintain consistent posting schedule"
    ],
    timeSaved: "10-18 hours",
    difficulty: "Beginner-Friendly",
    example: "A small business owner managing Instagram and LinkedIn uses this automation to maintain consistent, engaging content. Each Monday, Manus delivers a report containing 5 trending topics with engagement metrics, analysis of top-performing competitor posts, 10 content ideas with suggested formats, optimal posting times for each platform, and relevant hashtags and keywords.",
    imageUrl: "https://private-us-east-1.manuscdn.com/sessionFile/kpcq7gS3MtvzRMWxKmwyB3/sandbox/rNixv5dECVjTaW8UDgsfuW-img-4_1771135821000_na1fn_c29jaWFsLW1lZGlhLXJlc2VhcmNoLWF1dG9tYXRpb24.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUva3BjcTdnUzNNdHZ6Uk1XeEttd3lCMy9zYW5kYm94L3JOaXh2NWRFQ1ZqVGFXOFVEZ3NmdVctaW1nLTRfMTc3MTEzNTgyMTAwMF9uYTFmbl9jMjlqYVdGc0xXMWxaR2xoTFhKbGMyVmhjbU5vTFdGMWRHOXRZWFJwYjI0LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=oS2n6~TtKqK3o131DpFPr82-J9wLkd-yUcaX7AlBaIGfhOne4KlGLCqBaaHfhm0P-V0R9a9X7F22YBl3Q~37AxYQUGAPQt0oM4xsBktcWZEqYYKsXlwQQ6y2UVFOe0iRKl4WFNaPYSGqOEOC1Zuv9~c273gQQQIKL~iyxpiVtD9IWMTxnEe5nrKLJahJrkX2eIY1pxsKSpX7OpGZrBKZZmbEmUWjfPyfjpN9Ruds76-5CmN1gI-6yHf1FhCZGYCmo0vc6NFBWWqiWwzUEUuoNoTgifgpnXGPC8F4L2ctyjuJnuUTfbJ93JNigO-G~LyJbOToiEV73ZIXpDfdYyUZdGw__",
    icon: TrendingUp
  }
];

function CountUpNumber({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span className="bounce-in">{count}</span>;
}

function AutomationCard({ automation, index }: { automation: AutomationData; index: number }) {
  const Icon = automation.icon;
  const rotation = index % 2 === 0 ? 'rotate-1' : '-rotate-1';
  
  return (
    <div 
      className={`brutalist-card bg-white p-6 md:p-8 ${rotation} grain-texture`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3 flex-shrink-0">
          <img 
            src={automation.imageUrl} 
            alt={automation.title}
            className="w-full h-48 md:h-full object-cover border-4 border-[hsl(var(--dark-text))]"
          />
        </div>
        
        <div className="md:w-2/3 flex flex-col justify-between">
          <div>
            <div className="flex items-start gap-3 mb-3">
              <div className="p-2 bg-[hsl(var(--terracotta))] border-2 border-[hsl(var(--dark-text))] -rotate-3">
                <Icon className="w-6 h-6 text-[hsl(var(--warm-beige))]" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-black mb-1 text-[hsl(var(--dark-text))]">
                  {automation.title}
                </h3>
                <p className="text-sm md:text-base text-[hsl(var(--forest-green))] font-medium">
                  {automation.subtitle}
                </p>
              </div>
            </div>
            
            <p className="text-base leading-relaxed mb-4 text-[hsl(var(--dark-text))]">
              {automation.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
              <div className="bg-[hsl(var(--coral))] p-3 border-2 border-[hsl(var(--dark-text))] rotate-1">
                <div className="text-xs font-semibold text-[hsl(var(--dark-text))] mb-1">TIME SAVED/MONTH</div>
                <div className="text-xl font-black text-[hsl(var(--dark-text))]">{automation.timeSaved}</div>
              </div>
              <div className="bg-[hsl(var(--forest-green))] p-3 border-2 border-[hsl(var(--dark-text))] -rotate-1">
                <div className="text-xs font-semibold text-[hsl(var(--warm-beige))] mb-1">DIFFICULTY</div>
                <div className="text-lg font-black text-[hsl(var(--warm-beige))]">{automation.difficulty}</div>
              </div>
              <div className="bg-[hsl(var(--warm-beige))] p-3 border-2 border-[hsl(var(--dark-text))]">
                <div className="text-xs font-semibold text-[hsl(var(--dark-text))] mb-1">AUTOMATION #{automation.id}</div>
                <div className="text-lg font-black text-[hsl(var(--terracotta))]">SIMPLE</div>
              </div>
            </div>
            
            <div className="mb-4">
              <h4 className="text-sm font-bold text-[hsl(var(--dark-text))] mb-2">KEY BENEFITS:</h4>
              <ul className="space-y-1">
                {automation.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <span className="text-[hsl(var(--terracotta))] font-black mt-0.5">→</span>
                    <span className="text-[hsl(var(--dark-text))]">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <details className="group">
            <summary className="cursor-pointer text-sm font-bold text-[hsl(var(--forest-green))] hover:text-[hsl(var(--terracotta))] transition-colors list-none flex items-center gap-2">
              <span>VIEW REAL-WORLD EXAMPLE</span>
              <span className="group-open:rotate-90 transition-transform">→</span>
            </summary>
            <div className="mt-3 p-4 bg-[hsl(var(--warm-beige))] border-l-4 border-[hsl(var(--terracotta))] text-sm leading-relaxed text-[hsl(var(--dark-text))]">
              {automation.example}
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen grain-texture">
      {/* Hero Section */}
      <section 
        className="relative py-16 md:py-24 overflow-hidden"
        style={{
          backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/kpcq7gS3MtvzRMWxKmwyB3/sandbox/rNixv5dECVjTaW8UDgsfuW-img-1_1771135828000_na1fn_aGVyby1hdXRvbWF0aW9uLWFic3RyYWN0.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUva3BjcTdnUzNNdHZ6Uk1XeEttd3lCMy9zYW5kYm94L3JOaXh2NWRFQ1ZqVGFXOFVEZ3NmdVctaW1nLTFfMTc3MTEzNTgyODAwMF9uYTFmbl9hR1Z5YnkxaGRYUnZiV0YwYVc5dUxXRmljM1J5WVdOMC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ftEkub4197KtmITxBbteEFUpPTWLlv7a9xcwZy7igmimSirMW~e1M4KnMbyyQC~azMUhAwnYoIAgO4RLD2n~QZx-UB3IzrzLJMDQjZljiuLLZpujwl~TWniLPEsMp3PvM4E0PCPUr5h57AHyuybX3Hc7bSNzhljML-2edPy-9FrLlhdEbSDCHM-2H749aywD51uPfPMv1HRWvsWk~~szBnL98~5e0JKo4AmxlcKTjv2~Ig6EX6kEcJlQa61Yz8ooq94wnMjtOhFRzz8nEOirUgiwBUaj3jy-F4nuwNxS9OERWaAsoDW8R4mQECb~vtLbUNC453LcmlJFIDg2tr~91g__')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-[hsl(var(--warm-beige))] opacity-90"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-[hsl(var(--dark-text))] leading-tight">
              3 Simple Automations
              <span className="block text-[hsl(var(--terracotta))] -rotate-1 inline-block mt-2">
                You Can Start Today
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-[hsl(var(--forest-green))] leading-relaxed max-w-2xl mx-auto">
              Discover how Manus AI can save you hours every week with these beginner-friendly automation ideas. No coding required, just simple setup and massive time savings.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="bg-white p-6 border-4 border-[hsl(var(--dark-text))] rotate-2 shadow-lg">
                <div className="text-4xl md:text-5xl font-black text-[hsl(var(--terracotta))]">
                  <CountUpNumber end={54} />+
                </div>
                <div className="text-sm font-bold text-[hsl(var(--dark-text))] mt-1">HOURS SAVED</div>
                <div className="text-xs text-[hsl(var(--forest-green))]">per month</div>
              </div>
              <div className="bg-white p-6 border-4 border-[hsl(var(--dark-text))] -rotate-2 shadow-lg">
                <div className="text-4xl md:text-5xl font-black text-[hsl(var(--forest-green))]">
                  <CountUpNumber end={3} />
                </div>
                <div className="text-sm font-bold text-[hsl(var(--dark-text))] mt-1">AUTOMATIONS</div>
                <div className="text-xs text-[hsl(var(--forest-green))]">ready to use</div>
              </div>
              <div className="bg-white p-6 border-4 border-[hsl(var(--dark-text))] rotate-1 shadow-lg">
                <div className="text-4xl md:text-5xl font-black text-[hsl(var(--coral))]">
                  <CountUpNumber end={0} />
                </div>
                <div className="text-sm font-bold text-[hsl(var(--dark-text))] mt-1">CODING NEEDED</div>
                <div className="text-xs text-[hsl(var(--forest-green))]">beginner-friendly</div>
              </div>
            </div>
            <Button 
              size="lg"
              className="bg-[hsl(var(--terracotta))] hover:bg-[hsl(var(--terracotta)/.9)] text-[hsl(var(--warm-beige))] border-4 border-[hsl(var(--dark-text))] text-lg font-black px-8 py-6 shadow-lg hover:shadow-xl transition-all hover:-rotate-1"
            >
              EXPLORE AUTOMATIONS BELOW
            </Button>
          </div>
        </div>
      </section>

      {/* Automations Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-5xl mx-auto space-y-12">
            {automations.map((automation, index) => (
              <AutomationCard key={automation.id} automation={automation} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why These Work Section */}
      <section className="py-16 md:py-24 bg-[hsl(var(--forest-green))] text-[hsl(var(--warm-beige))]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-center">
              Why These Automations Work
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[hsl(var(--warm-beige))] text-[hsl(var(--dark-text))] p-6 border-4 border-[hsl(var(--dark-text))] rotate-1">
                <h3 className="text-xl font-black mb-3">Clear Value</h3>
                <p className="text-sm leading-relaxed">
                  Each automation addresses a specific, time-consuming task that most professionals face regularly. The benefits are immediate and measurable.
                </p>
              </div>
              <div className="bg-[hsl(var(--coral))] text-[hsl(var(--dark-text))] p-6 border-4 border-[hsl(var(--dark-text))] -rotate-1">
                <h3 className="text-xl font-black mb-3">Low Barrier</h3>
                <p className="text-sm leading-relaxed">
                  No coding knowledge or complex technical setup required. Manus handles the complexity behind the scenes.
                </p>
              </div>
              <div className="bg-[hsl(var(--terracotta))] text-[hsl(var(--warm-beige))] p-6 border-4 border-[hsl(var(--dark-text))] -rotate-2">
                <h3 className="text-xl font-black mb-3">Scalable Impact</h3>
                <p className="text-sm leading-relaxed">
                  While simple to implement, these automations deliver substantial time savings that compound over weeks and months.
                </p>
              </div>
              <div className="bg-[hsl(var(--warm-beige))] text-[hsl(var(--dark-text))] p-6 border-4 border-[hsl(var(--dark-text))] rotate-2">
                <h3 className="text-xl font-black mb-3">Immediate ROI</h3>
                <p className="text-sm leading-relaxed">
                  The time saved from these automations quickly justifies any investment in the tool, often within the first month of use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-[hsl(var(--dark-text))]">
              Ready to Start Automating?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-[hsl(var(--forest-green))] leading-relaxed">
              The key to successful automation is starting with clear, well-defined tasks that consume significant time but follow predictable patterns. These three examples represent perfect candidates for automation, offering substantial benefits with minimal complexity.
            </p>
            <div className="bg-white p-8 border-4 border-[hsl(var(--dark-text))] brutalist-card">
              <h3 className="text-2xl font-black mb-4 text-[hsl(var(--dark-text))]">Getting Started Steps</h3>
              <ol className="text-left space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-2xl font-black text-[hsl(var(--terracotta))]">1.</span>
                  <div>
                    <span className="font-bold">Define Your Requirements:</span> Clearly specify what information you need, how often, and in what format.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl font-black text-[hsl(var(--terracotta))]">2.</span>
                  <div>
                    <span className="font-bold">Provide Context:</span> Give Manus relevant details about your industry, preferences, and goals.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl font-black text-[hsl(var(--terracotta))]">3.</span>
                  <div>
                    <span className="font-bold">Start Simple:</span> Begin with basic automation and gradually add complexity as you become more comfortable.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl font-black text-[hsl(var(--terracotta))]">4.</span>
                  <div>
                    <span className="font-bold">Iterate and Refine:</span> Review initial outputs and provide feedback to improve accuracy and relevance.
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[hsl(var(--dark-text))] text-[hsl(var(--warm-beige))]">
        <div className="container text-center">
          <p className="text-sm">
            Built with Manus AI • Powered by automation • Designed for humans
          </p>
        </div>
      </footer>
    </div>
  );
}
