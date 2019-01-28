/* Notes
  Board: Arduino Nano
  Processor: ATmega328P (Old Bootloader)
  Button LED example: https://arduino.stackexchange.com/a/35842/43363 
  Buzzer example: http://www.ardumotive.com/how-to-use-a-buzzer-en.html
*/

// configuration
const int ledPin =  6;
const int buttonPin = 7;
const int buzzerPin = 8;

void setup() {
  // setup serial port
  Serial.begin(9600);
  
  // initialize pins
  pinMode(ledPin, OUTPUT);
  pinMode(buttonPin, INPUT_PULLUP);
  pinMode(buzzerPin, OUTPUT);
  
  Serial.print("setup complete");
}

void loop() {
  int buttonState = digitalRead(buttonPin);

  if (buttonState == LOW) {
    // turn LED on:
    digitalWrite(ledPin, HIGH); // turn LED on
    tone(buzzerPin, 1000); // sound in kHZ
    delay(1000); // milliseconds
  } else {
    digitalWrite(ledPin, LOW);  // turn LED off:
    noTone(buzzerPin);  // stop sound
  }
}
