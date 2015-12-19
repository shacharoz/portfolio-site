// automatically fix capitaliztion in all written text in the page 

function fixCapitalsText (text)
{
  result = "";

  sentenceStart = true;
  for (i = 0; i < text.length; i++)
  {
    ch = text.charAt (i);

    if (sentenceStart && ch.match (/^\S$/))
    {
      ch = ch.toUpperCase ();
      sentenceStart = false;
    }
    else
    {
      ch = ch.toLowerCase ();
    }

    if (ch.match (/^[.!?]$/))
    {
      sentenceStart = true;
    }

    result += ch;
  }

  return result;
}

function fixCapitalsNode (node)
{
  if (node.nodeType == 3 || node.nodeType == 4) // Text or CDATA
  {
    node.textContent = fixCapitalsText (node.textContent);
  }

  if (node.nodeType == 1)
    for (i = 0; i < node.childNodes.length; i++)
      fixCapitalsNode (node.childNodes.item (i));
}
// -->