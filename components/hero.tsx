import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-border bg-card text-sm">
            <span className="text-sky-600">New:</span>
            <span className="text-muted-foreground">AI-powered workflow automation is here</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
            The complete platform for team productivity
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto text-balance leading-relaxed">
            Your team's toolkit to stop configuring and start innovating. Collaborate seamlessly, automate workflows,
            and achieve more together with AI.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="text-base px-8 cursor-pointer">
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 bg-transparent cursor-pointer hover:bg-sky-500">
              <Play className="mr-2 h-4 w-4" />
              Watch Demo
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-border ">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">20 days</div>
              <div className="text-sm text-muted-foreground">saved on daily builds</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-sm text-muted-foreground">faster time to market</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">300%</div>
              <div className="text-sm text-muted-foreground">increase in productivity</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">6x</div>
              <div className="text-sm text-muted-foreground">faster collaboration</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
