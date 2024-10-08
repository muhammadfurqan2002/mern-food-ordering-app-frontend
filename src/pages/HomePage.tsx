import mobile_person from "../assets/mobile_person.png"
import sandwich from "../assets/sandwich.png"
export default function HomePage() {
  return (
    <div className="flex flex-col mx-20 gap-12">
        <div className="bg-white rounded-lg shadow-md py-8  flex flex-col gap-5 text-center -mt-16">
            <h1 className="text-2xl md:text-5xl font-bold tracking-tight text-orange-600">
                Tuck into takeway today
            </h1>
            <span className="text-xs md:text-xl ">food is just a click away!</span>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
            <img src={mobile_person} width={"300px"} alt="" />
            <div className="flex flex-col justify-center items-center text-center gap-4">
                    <span className="text-3xl font-bold tracking-tighter">
                        Order Takeaway even faster!
                    </span>
                    <span>Call now for faster ordering and personalized recommendations</span>
                    <img src={sandwich}  width={"100px"} alt="" />
            </div>
        </div>
    </div>
  )
}
