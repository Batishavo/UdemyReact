import {useState} from 'react'

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['warhamer','JoJo']);



  return (
    <>
      {/*titulo*/}
      <h1>GifExpertAPP</h1>
      {/*Input*/}

      {/* lIstado de Gig */}
      <ol>
        { categories.map( categories =>{
          return <li key = { categories } >{categories}</li>
        } )}
      </ol>
      {/** Gif Item */}
    </>
  );
};
