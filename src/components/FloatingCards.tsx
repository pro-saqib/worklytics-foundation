import { TrendingUp, Star } from "lucide-react";

const FloatingCards = () => {
  return (
    <>
        {/* Floating Cards */}
              <div className="absolute top-8 md:-left-12 -left-8 bg-white rounded-2xl p-4 shadow-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-accent" />
                  <span className="text-sm font-semibold text-foreground">Sale Report</span>
                </div>
                <div className="text-xs text-muted-foreground mb-2">Mar 21-Apr 22</div>
                <div className="h-12 w-32 bg-gradient-to-r from-accent/20 to-accent/5 rounded-lg"></div>
              </div>

              <div className="absolute top-1/3 -right-8 bg-white rounded-2xl p-4 shadow-xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="text-xs text-muted-foreground mb-1">Total Visitor</div>
                <div className="text-2xl font-bold text-foreground mb-1">$23,987</div>
                <div className="flex items-center gap-1 text-green-600 text-xs">
                  <TrendingUp className="w-3 h-3" />
                  <span>10%</span>
                </div>
                <div className="mt-3 pt-3 border-t border-border">
                  <div className="text-xs text-muted-foreground mb-2">Group Members</div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-accent"></div>
                      <div className="text-xs text-foreground">+$90.00</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-highlight"></div>
                      <div className="text-xs text-foreground">+$90.00</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 md:-left-12 left-[-40px] bg-white rounded-2xl px-5 py-3 shadow-xl animate-fade-in flex items-center gap-3" style={{ animationDelay: '0.6s' }}>
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-accent border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-highlight border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-accent/60 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-muted border-2 border-white"></div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">2195+ Ratings</div>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-highlight text-highlight" />)}
                  </div>
                </div>
              </div>
    </>
  )
}

export default FloatingCards