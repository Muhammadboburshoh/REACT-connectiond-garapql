import { useQuery } from "@apollo/client"
import { CLASSIFIEDS } from "./Query"

import Loader from "./Loader/Loader"
import ErrorMassage from "./Error/Error"

function Classified () {

  const {loading, error, data} = useQuery(CLASSIFIEDS)

  return(
    <>
    {loading && <Loader />}
    {error && <ErrorMassage error={error} />}
    
    {
      data && <>
        {
          data.classifieds.map(c => <li key={c.id}>{c.title}</li>)
        }
      </>}
    </>
  )
}

export default Classified