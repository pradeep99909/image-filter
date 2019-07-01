
var hue=document.getElementById('hue');
var saturate=document.getElementById('saturate');
var brightness=document.getElementById('brightness');
var contrast=document.getElementById('contrast');
var blur=document.getElementById('blur');
var grayscale=document.getElementById('grayscale');
var sepia=document.getElementById('sepia');
var invert=document.getElementById('invert');

var img=document.getElementById('img_url');



hue.addEventListener('input',()=>{
  img.style.filter="hue-rotate("+hue.value+"deg) saturate("+saturate.value+"%) brightness("+brightness.value+"%) contrast("+contrast.value+"%) blur("+blur.value+"px) grayscale("+grayscale.value+"%) sepia("+sepia.value+"%) invert("+invert.value+"%)";
  
  
  document.getElementById('hue_value').innerHTML=hue.value+"deg";
  document.getElementById('saturate_value').innerHTML=saturate.value+"%";
  document.getElementById('brightness_value').innerHTML=brightness.value+"%";
  document.getElementById('contrast_value').innerHTML=contrast.value+"%";
  document.getElementById('blur_value').innerHTML=blur.value+"px";
  document.getElementById('grayscale_value').innerHTML=grayscale.value+"%";
  document.getElementById('invert_value').innerHTML=invert.value+"%";
  document.getElementById('sepia_value').innerHTML=sepia.value+"%";
});




saturate.addEventListener('input',()=>{
  img.style.filter="hue-rotate("+hue.value+"deg) saturate("+saturate.value+"%) brightness("+brightness.value+"%) contrast("+contrast.value+"%) blur("+blur.value+"px) grayscale("+grayscale.value+"%) sepia("+sepia.value+"%) invert("+invert.value+"%)";
  
  
  document.getElementById('hue_value').innerHTML=hue.value+"deg";
  document.getElementById('saturate_value').innerHTML=saturate.value+"%";
  document.getElementById('brightness_value').innerHTML=brightness.value+"%";
  document.getElementById('contrast_value').innerHTML=contrast.value+"%";
  document.getElementById('blur_value').innerHTML=blur.value+"px";
  document.getElementById('grayscale_value').innerHTML=grayscale.value+"%";
  document.getElementById('invert_value').innerHTML=invert.value+"%";
  document.getElementById('sepia_value').innerHTML=sepia.value+"%";
});



brightness.addEventListener('input',()=>{
  img.style.filter="hue-rotate("+hue.value+"deg) saturate("+saturate.value+"%) brightness("+brightness.value+"%) contrast("+contrast.value+"%) blur("+blur.value+"px) grayscale("+grayscale.value+"%) sepia("+sepia.value+"%) invert("+invert.value+"%)";
  
  
  document.getElementById('hue_value').innerHTML=hue.value+"deg";
  document.getElementById('saturate_value').innerHTML=saturate.value+"%";
  document.getElementById('brightness_value').innerHTML=brightness.value+"%";
  document.getElementById('contrast_value').innerHTML=contrast.value+"%";
  document.getElementById('blur_value').innerHTML=blur.value+"px";
  document.getElementById('grayscale_value').innerHTML=grayscale.value+"%";
  document.getElementById('invert_value').innerHTML=invert.value+"%";
  document.getElementById('sepia_value').innerHTML=sepia.value+"%";
});



contrast.addEventListener('input',()=>{
  img.style.filter="hue-rotate("+hue.value+"deg) saturate("+saturate.value+"%) brightness("+brightness.value+"%) contrast("+contrast.value+"%) blur("+blur.value+"px) grayscale("+grayscale.value+"%) sepia("+sepia.value+"%) invert("+invert.value+"%)";
  
  
  document.getElementById('hue_value').innerHTML=hue.value+"deg";
  document.getElementById('saturate_value').innerHTML=saturate.value+"%";
  document.getElementById('brightness_value').innerHTML=brightness.value+"%";
  document.getElementById('contrast_value').innerHTML=contrast.value+"%";
  document.getElementById('blur_value').innerHTML=blur.value+"px";
  document.getElementById('grayscale_value').innerHTML=grayscale.value+"%";
  document.getElementById('invert_value').innerHTML=invert.value+"%";
  document.getElementById('sepia_value').innerHTML=sepia.value+"%";
});



blur.addEventListener('input',()=>{
  img.style.filter="hue-rotate("+hue.value+"deg) saturate("+saturate.value+"%) brightness("+brightness.value+"%) contrast("+contrast.value+"%) blur("+blur.value+"px) grayscale("+grayscale.value+"%) sepia("+sepia.value+"%) invert("+invert.value+"%)";
  
  
  document.getElementById('hue_value').innerHTML=hue.value+"deg";
  document.getElementById('saturate_value').innerHTML=saturate.value+"%";
  document.getElementById('brightness_value').innerHTML=brightness.value+"%";
  document.getElementById('contrast_value').innerHTML=contrast.value+"%";
  document.getElementById('blur_value').innerHTML=blur.value+"px";
  document.getElementById('grayscale_value').innerHTML=grayscale.value+"%";
  document.getElementById('invert_value').innerHTML=invert.value+"%";
  document.getElementById('sepia_value').innerHTML=sepia.value+"%";
});


grayscale.addEventListener('input',()=>{
  img.style.filter="hue-rotate("+hue.value+"deg) saturate("+saturate.value+"%) brightness("+brightness.value+"%) contrast("+contrast.value+"%) blur("+blur.value+"px) grayscale("+grayscale.value+"%) sepia("+sepia.value+"%) invert("+invert.value+"%)";
  
  
  document.getElementById('hue_value').innerHTML=hue.value+"deg";
  document.getElementById('saturate_value').innerHTML=saturate.value+"%";
  document.getElementById('brightness_value').innerHTML=brightness.value+"%";
  document.getElementById('contrast_value').innerHTML=contrast.value+"%";
  document.getElementById('blur_value').innerHTML=blur.value+"px";
  document.getElementById('grayscale_value').innerHTML=grayscale.value+"%";
  document.getElementById('invert_value').innerHTML=invert.value+"%";
  document.getElementById('sepia_value').innerHTML=sepia.value+"%";
});



sepia.addEventListener('input',()=>{
  img.style.filter="hue-rotate("+hue.value+"deg) saturate("+saturate.value+"%) brightness("+brightness.value+"%) contrast("+contrast.value+"%) blur("+blur.value+"px) grayscale("+grayscale.value+"%) sepia("+sepia.value+"%) invert("+invert.value+"%)";
  
  
  document.getElementById('hue_value').innerHTML=hue.value+"deg";
  document.getElementById('saturate_value').innerHTML=saturate.value+"%";
  document.getElementById('brightness_value').innerHTML=brightness.value+"%";
  document.getElementById('contrast_value').innerHTML=contrast.value+"%";
  document.getElementById('blur_value').innerHTML=blur.value+"px";
  document.getElementById('grayscale_value').innerHTML=grayscale.value+"%";
  document.getElementById('invert_value').innerHTML=invert.value+"%";
  document.getElementById('sepia_value').innerHTML=sepia.value+"%";
});



invert.addEventListener('input',()=>{
  img.style.filter="hue-rotate("+hue.value+"deg) saturate("+saturate.value+"%) brightness("+brightness.value+"%) contrast("+contrast.value+"%) blur("+blur.value+"px) grayscale("+grayscale.value+"%) sepia("+sepia.value+"%) invert("+invert.value+"%)";
  
  
  document.getElementById('hue_value').innerHTML=hue.value+"deg";
  document.getElementById('saturate_value').innerHTML=saturate.value+"%";
  document.getElementById('brightness_value').innerHTML=brightness.value+"%";
  document.getElementById('contrast_value').innerHTML=contrast.value+"%";
  document.getElementById('blur_value').innerHTML=blur.value+"px";
  document.getElementById('grayscale_value').innerHTML=grayscale.value+"%";
  document.getElementById('invert_value').innerHTML=invert.value+"%";
  document.getElementById('sepia_value').innerHTML=sepia.value+"%";
});





var o=()=>{
  var add_filter=document.getElementById('filter_input');
  if(add_filter.style.display=="none"){
    add_filter.style.display="block";
  }
  else{
    add_filter.style.display="none";
  }
}

document.getElementById('src').addEventListener('change',img_src);

document.getElementById('src').addEventListener('change',ml);


function img_src(){ img.src=document.getElementById('src').value; }
