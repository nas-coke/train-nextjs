import {useRouter} from 'next/router'

export default function ProduceDetail(){

   const router =  useRouter()
   console.log(router)
    return (
        <div>
            ProduceDetail
            { router.query.id }
        </div>
    )
}