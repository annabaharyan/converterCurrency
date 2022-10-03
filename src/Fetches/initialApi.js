
export const initialApi=[]
export const myApi = () => {
  return  fetch(`https://cdn.cur.su/api/latest.json`)
        .then(resp=> resp.json())
}

