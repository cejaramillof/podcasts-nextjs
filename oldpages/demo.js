
export default class extends React.Component {
  render() {
    return (
      <>
        <h1>Hi!</h1>
        <img src="xd.png" alt="logo" />
        <style jsx global>{`
        body {
          background: orange;
          }
        `}</style>
        <style jsx>{`
          h1 {
            color: red;
          }
          body {  /* dont work, because with styled-jsx only can apply properties to current component */
            background: pink;
          }
          /* Will apply this style to all anchor, inside a .main of this (self) component */
          .main :global(a) { color: orange; }
          /* Is diferent, because will add a global rule */
          :global(.main a) { color: orange; }
        `}</style>

      </>
    )
  }
}