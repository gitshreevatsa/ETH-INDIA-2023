import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import CardCS from "@/components/ui/CardCS"
import { useState } from "react"
import axios from "axios";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Id must be at least 2 characters.",
  }),
})


const dataMap = new Map([
  [137, "polygon"],
  [8453, "base"],
  [42161, "arbitrum"],
  [1101, "polygon_zkevm"],
  [59144, "linea"],
  [42220, "celo"],
  [245022934, "neon"],
  [534352, "scroll"],
  [5000, "mantle"],
]);

const dataMap2 = new Map([
  ["polygon", 137],
  ["base", 8453],
  ["arbitrum", 42161],
  ["polygon_zkevm", 1101],
  ["linea", 59144],
  ["celo", 42220],
  ["neon", 245022934],
  ["scroll", 534352],
  ["mantle", 5000],
]);

export default function Home() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  const handleSubmit = async () => {
    setRes("LOADING")
    const res = await axios.get(`http://localhost:5005/${value}/${dataMap2.get(chain)}`);
    setRes(res)
    console.log(res.data)
  }


  const [value, setValue] = useState("")
  const [chain, setchain] = useState("");
  const [res, setRes] = useState("")

  return (
    <div
      className={`flex min-h-screen flex-col bg-gradient-to-r from-orange-300 to-rose-300 items-center pt-10 background-animate `}
    >
      <div className="font-extrabold text-4xl flex items-start flex-col w-screen md:pl-[16rem] text-gray-200 mb-10">CoinRadar
        <div className="mt-1 text-base">
          Get Token overview and in depth  analysis for safe asset holding.
        </div>
        <div className="mt-1 mb-2 text-base">Get a report of the token and take a step towards being an intelligent holder.</div></div>
      <Form {...form}>
        <form onSubmit={(e)=>{e.preventDefault()}} className="w-2/3 space-y-6">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <div className="flex gap-y-4 flex-col md:flex-row md:gap-x-4">
                  <FormControl>
                    <input className={"text-black flex h-10 md:w-full w-[17.5rem] rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:placeholder:text-neutral-400 focus:outline-4 focus:outline-offset-2 focus:outline focus:outline-yellow-200"}
                    placeholder="Enter Id" onChange={(e)=>{setValue(e.target.value)}} />
                  </FormControl>
                  <Select onValueChange={(value)=>setchain(value)}>
                    <SelectTrigger className="w-[280px] text-black">
                      <SelectValue placeholder="Select Chain" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from(dataMap).map(([key, Value]) => (
                        <SelectItem value={Value}>
                          {Value}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" onClick={handleSubmit} className="bg-gradient-to-br from-yellow-200 to-yellow-400 text-black font-semibold hover:outline-4 hover:outline-offset-2 hover:outline hover:outline-rose-200">Submit</Button>
        </form>
      </Form>
      <div className={` ${res ? "flex" : "hidden"} flex-col gap-y-2 mt-4 mb-8`}>
        {res === "LOADING"? "RUNNING SIMULATIONS" : res && <CardCS data={res.data.data}/>}
      </div>
    </div>
  )
}
