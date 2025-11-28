import { Card } from "@/components/ui/card"
import { Bot, Workflow, Lock, Zap, Users, LineChart } from "lucide-react"

const features = [
  {
    icon: Bot,
    title: "AI-Powered Automation",
    description:
      "Let AI handle repetitive tasks while your team focuses on innovation. Smart workflows that learn and adapt to your needs.",
  },
  {
    icon: Users,
    title: "Real-Time Collaboration",
    description:
      "Work together seamlessly with live editing, instant notifications, and integrated communication tools.",
  },
  {
    icon: Workflow,
    title: "Custom Workflows",
    description:
      "Build and automate workflows tailored to your team. Drag-and-drop builder with powerful integrations.",
  },
  {
    icon: LineChart,
    title: "Advanced Analytics",
    description:
      "Gain insights into team performance, project progress, and productivity metrics with real-time dashboards.",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Bank-level encryption, SOC 2 compliance, and advanced access controls to keep your data safe.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Built for speed with edge computing and real-time synchronization across all devices and team members.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Everything you need to work smarter</h2>
          <p className="text-xl text-muted-foreground text-balance">
            Powerful features designed to help teams collaborate better and ship faster
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="p-6 bg-card border-border hover:border-sky-500 transition-colors">
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-lg bg-sky-500/20 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-sky-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
