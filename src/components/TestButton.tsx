// function TestButton(): JSX.Element {
//   return (
//     <button onClick={() => window.alert("Hello from button g!")}>
//       Make me do something when I'm clicked...
//     </button>
//   )
// }

function TestButton(): JSX.Element {
  function handleClick() {
    console.log("Hello from button A!");
  }

  return (
    <button onClick={handleClick}>TEst BUtton</button>
  );
}
export default TestButton;
