import { Card } from "@/components/ui/card"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Engineering Lead",
    company: "TechCorp",
    content:
      "FlowSync transformed how our team collaborates. We've cut meeting time by 40% and shipped features 2x faster.",
    avatar: "/image-copy.png",
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    company: "StartupXYZ",
    content:
      "The AI automation features saved us hundreds of hours. Our productivity has skyrocketed since adopting FlowSync.",
    avatar: "/image-copy-2.png",
  },
  {
    name: "Emily Rodriguez",
    role: "CEO",
    company: "InnovateLabs",
    content:
      "Best investment we've made. FlowSync keeps our remote team aligned and productive. Couldn't imagine working without it.",
    avatar: "/image.png",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Loved by teams worldwide</h2>
          <p className="text-xl text-muted-foreground text-balance">
            Join thousands of teams already working smarter with FlowSync
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-card border-border">
              <div className="flex flex-col gap-4">
                <p className="text-foreground leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center gap-3 mt-2">
                  <img
                    src={testimonial.avatar || "/"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}