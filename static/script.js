function sayText(text)
{
  if(!responsiveVoice.isPlaying())
  {
    responsiveVoice.speak(text, "UK English Female");    
  }

}
