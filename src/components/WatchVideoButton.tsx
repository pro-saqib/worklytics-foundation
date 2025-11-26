import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const WatchVideoButton = () => {
    return (
        <Button variant="ghost" className="text-white hover:bg-white/10 rounded-full px-6 py-3 h-auto text-base font-semibold flex items-center gap-2">
            <Play className="w-5 h-5 fill-white" />
            Watch Video
        </Button>)
}

export default WatchVideoButton