with open ("hlo.txt", "r") as f:
    data = f.read()

import pyttsx3

engine = pyttsx3.init()

engine.say(data)

engine.runAndWait()