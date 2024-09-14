import { useEffect, useState } from "react"
import { supabase } from "../supabase/supabase"

const Item = () => {
    const [loading, setLoading] = useState(false)
    async function orderList() {
        try {
            setLoading(true)

            const val = await supabase
                .from('activeorders')
                .select('*')

                console.log(val);
            const { data, error, status } = val
            if (error && status !== 406) {
                throw error
            }



        } catch (error) {
            if (error instanceof Error) {

            }
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        orderList()
    }, [])

    return (
        <div>Item</div>
    )
}

export default Item