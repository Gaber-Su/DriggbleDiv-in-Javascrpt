let wrapper = document.querySelector('.wrapper'),
 header = wrapper.querySelector("header");
//  console.log( header);


function onDrag(e) {
  let getStyle = window.getComputedStyle(wrapper); // Get all Styles Element 
  let getStyleTop = parseInt(getStyle.top) // top Element 
  let getStyleLeft = parseInt(getStyle.left)  // Left Element 
 wrapper.style.left = `${getStyleLeft + e.movementX}px` // left + movementx
 wrapper.style.top = `${getStyleTop + e.movementY}px`  // top = movementY
}

header.addEventListener("mousedown", ()=> {   // Add Event On Header
  header.classList.add('active')
  header.addEventListener("mousemove", onDrag)
})
document.addEventListener("mouseup", ()=> { // Add Event On Document
  header.classList.remove('active') 
  header.removeEventListener("mousemove", onDrag)
})