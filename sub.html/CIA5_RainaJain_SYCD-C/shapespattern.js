let Hslider, Vslider, RdShape, CpShape1, CpShape2 ;

function setup()
{
  createCanvas(600, 600);
  Hslider = createSlider(1 , 9, 8)
  Hslider.position(610, 25)
  Hslider.style('width', '160px')
 
 
  Vslider = createSlider(1 , 9, 8)
  Vslider.position(600, 50)
  Vslider.style('width', '160px')
 
  RdShape = createRadio();
  RdShape.option("Rect")
  RdShape.option("RoundRect")
  RdShape.option("Circle")
  RdShape.option("Triangle")
  RdShape.option("Quadilateral")
  RdShape.selected("Rect")
  RdShape.position(610, 75)
 
  CpShape1 = createColorPicker('#FFCEDC')
  CpShape1.position(610, 150)
  CpShape1.style("height", "25px")
 
  CpShape2 = createColorPicker('rgb(255,249,194)')
  CpShape2.position(690, 150)
  CpShape2.style("height", "25px")
 
}

function draw()
{
  background(220);

  for(m=0 ; m < Vslider.value() ; m++)
    {
      for (i=0; i < Hslider.value() ; i++)
        {
          if(i%2==1 && m%2==1 )
            {
              fill(CpShape1.color())
            }
          else if(i%2==0 && m%2==0 )
            {
              fill(CpShape1.color())
            }
          else
            {
              fill(CpShape2.color())
            }
         
          if (RdShape.value() == "Rect")
            {
              rect( 60*i+20, 60*m, 50 , 50 )
            }
          else if (RdShape.value() == "RoundRect")
            {
              rect( 60*i+20, 60*m, 50 , 50 , 10 )
            }
          else if(RdShape.value() == "Triangle")
            {
              triangle(30+i*70, 75+m*60, 58+i*70, 20+m*60, 86+i*70, 75+m*60)
            }
          else if(RdShape.value() == "Quadilateral")
            {
              quad(19+i*60, 20+m*60, 61+i*60, 20+m*60, 67+i*60, 62+m*60, 30+i*60, 76+m*60)
            }
          else
            {
              circle ( 60*i+20, 60*m, 50 )
            }
          
        }
    }
}