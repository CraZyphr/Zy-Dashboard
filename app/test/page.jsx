// using server action

const Page = () => {
const handelForm=async ()=>{
    "use server"
    console.log("hello")
}

    return (
      <div>
        <form action={handelForm}>
            <input type="text"/>
            <button >Send</button>
        </form>
      </div>
    )
  }
  
  export default Page