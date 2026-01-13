import Input from "./components/ui/input";
import Button from "./components/ui/Button";
import Card from "./components/ui/Card";

//Använd export default för att exportera en komponent från en fil

export default function App() {
  return (
    <>
      <div>
        <Input label="Name " type="text" placeholder="What is your name?" />
        <Button text="Test Secondary" variant="secondary" />
        <Button text="Primary Enabled" type="button" />
        <Button
          text="Secondary Disabled"
          type="button"
          variant="secondary"
          disabled={true}
        />
      </div>
      <div>
        <Card
          title="Card test"
          img="https://media.lordicon.com/icons/wired/outline/46-timer-stopwatch.svg"
          description={`Lorem ipsum dolor, sit amet consectetur adipisicing elit.
Magnam, est.`}
        >
          <div>
            <Button text="Click here" />
            <p>Children children</p>
          </div>
        </Card>
      </div>
    </>
  );
}
