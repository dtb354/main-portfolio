import ResumeTimeline from "@/components/ResumeTimeline";
import CircularGallery from "@/components/CircularGallery";

export default function Home() {
  return(
    <>
      <div className="relative w-full h-[25vh] md:h-[500px]">
        <CircularGallery bend={0} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} scrollSpeed={2}/>
      </div>   
      <ResumeTimeline />
    </>
  ) 
}
