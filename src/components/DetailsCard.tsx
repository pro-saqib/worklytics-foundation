import { cn } from "@/lib/utils";


const DetailsCard = ({ details, gridClassName, spacing }) => {

  return (
              <div className={cn("grid ", gridClassName)}>
                {/* 2. Map over the array */}
                {details.map((item, index) => (
                  <div key={index} className={cn("bg-card border border-border rounded-lg group transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-sm", spacing)}>
                    <div className="flex items-start gap-4">
                      <div className={cn("w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0", item.bgColor)}>
                        <item.Icon className={cn(item.iconColor)} size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
  )
}

export default DetailsCard