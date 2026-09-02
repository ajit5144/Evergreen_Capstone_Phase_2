
# AI /CO-Pilot Usage memo

I used GitHub Copilot for a small assembly step by asking it to add two more realistic rows to public/quotes.json using the existing quote shape. 

What co-pilot get right ?
It got the general structure right, matched the field names correctly, and produced believable insurance examples quickly, which saved time on repetitive editing.

 What it got wrong?
  Not this time. But there is always a chance , Co-pilot can mess it or add premium in the json file which might cause validation issues. 
  
  I would not ship its output completely as-is without checking realism and format. If Copilot had put premium in quotes as a string, TypeScript likely would not catch it inside public/quotes.json, which shows the type contracts protect app code better than raw static data files.