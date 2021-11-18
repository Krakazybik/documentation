# Open Graph dynamic image generator server

###.env
```dotenv
PORT=5000
LOG_LEVEL = all
```


###Templates 
``` 
--- tempaltes 
    --- basic
        --- font_file.ttf
        --- preview_file.png|jpg|etc
        --- template.json
```
**basic** - template name.  
**font_file.ttf** - font file with TTF format.  
**preview_file** - any image file (jpeg|png|webp|gif|svg)  
**template.json**  

```json
{
  "image": "preview.png",
  "font": "LicensePlate.ttf",
  "layout": [
    {
      "name": "title",
      "top": 10,
      "left": 10
    },
    {
      "name": "description",
      "top": 10,
      "left": 10
    }
  ]
}
```
