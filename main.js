inputcontainer = document.querySelector('.inputcontainer');
plusbtn = document.querySelector('.plusbtn');
iconreng = document.querySelector('.iconreng');
buttons = document.querySelector('.buttons');
body = document.querySelector('body');
delete1 = document.querySelector('.delete');
input = document.querySelector('.input');
konteynerlistlerin = document.querySelector('.konteynerlistlerin');
warningresult = document.querySelector('.warningresult');
searchinput = document.querySelector('.searchinput');
sort1 = document.querySelector('.sort1');
sort2 = document.querySelector('.sort2');
searchiconn = document.querySelector('.searchiconn');
add = document.querySelector('.add');
list_cont = document.createElement('ul');
list_cont.classList.add('listcontain');
info = document.querySelector(".information");
add.addEventListener("mouseover",()=>{
    info.innerText = "to-do elave edin"
})
add.addEventListener("mouseout",()=>{
    info.innerText = "info"
})
searchiconn.addEventListener("mouseover",()=>{
    info.innerText = "axtarisi acin"
})
searchiconn.addEventListener("mouseout",()=>{
    info.innerText = "info"
})
plusbtn.addEventListener("mouseover",()=>{
    info.innerText = "yeni to-do ucun inputu acin"
})
plusbtn.addEventListener("mouseout",()=>{
    info.innerText = "info"
})

sort1.addEventListener('mouseover', ()=>{
    sort1.src = "images/black_down.png";
})
sort1.addEventListener('mouseout', ()=>{
    sort1.src = "images/white_down.png";
})
// function sort(){
                

                

               
//     if(listalph.src=="http://127.0.0.1:5501/images/btnnn.png"){
//         listalph.src = "http://127.0.0.1:5501/images/list.png";
//         listalph.addEventListener("mouseover",()=>{
//             listalph.src = "images/reversed.png";
            
//         });
//         listalph.addEventListener("mouseout",()=>{
//             listalph.src = "images/btnnn.png";
            
//         })
        
//         console.log(listalph.src)
//         for(let i=0;i<massiv.length;i++){
//                 massiv[i].innerText = sorted[i]   
//             }
            
//         }
//     else{
//         listalph.src = "http://127.0.0.1:5501/images/btnnn.png";
//         listalph.addEventListener("mouseover",()=>{
//             listalph.src = "images/sorted.png";
//         });
//         listalph.addEventListener("mouseout",()=>{
//             listalph.src = "images/list.png";
//         })
        

//         for(let i=0;i<massiv.length;i++){
//             massiv[i].innerText = old.sort().reverse()[i]
//         }
//         console.log(listalph.src)
//     }
// }
sort2.addEventListener('mouseover', ()=>{
    sort2.src = "images/black_up.png";
})
sort2.addEventListener('mouseout', ()=>{
    sort2.src = "images/white_up.png";
})
delete1.addEventListener('mouseover', ()=>{
    delete1.src = "images/purple_delet.png";
})
delete1.addEventListener('mouseout', ()=>{
    delete1.src = "images/white_delet.png";
})
delete1.addEventListener('click', ()=>{
    input.value = '';
})
add.addEventListener('click', ()=>{
    if(input.value.length > 0 && input.value.length <= 20){
        list_cont.style.display = 'block';
        li = document.createElement('li');
        list_cont.append(li);
        konteynerlistlerin.append(list_cont);
        li.classList.add('listici');
        li.id = 'listid'
        li.draggable = 'true';
        p = document.createElement('p');
        p.innerHTML = input.value;
        li.append(p);
        div = document.createElement('div');
        div.classList.add('editdeletecont')
        edit = document.createElement('img');
        edit.src = 'images/edit_todo_1.png';
        edit.classList.add('edit');
        div.append(edit);
        imgg = document.createElement('img');
        imgg.src = 'images/white_delet.png';
        imgg.classList.add('delete2');
        div.append(imgg);
        li.append(div);
        input.value = '';
        inputcontainer.style.display = 'none';
        delete2 = document.querySelectorAll('.delete2')
        for(let i=0; i<delete2.length; i++){
            delete2[i].addEventListener('mouseover', ()=>{
                delete2[i].src = "images/purple_delet.png"
                info.innerText = "to-do nu silin"
            })
            delete2[i].addEventListener('mouseout', ()=>{
                delete2[i].src = "images/white_delet.png"
                info.innerText = "info"
            })
        }
        editsss = document.querySelectorAll('.edit');
        paredits = document.querySelectorAll('p');
        listiciss = document.querySelectorAll('.listici');
        for(let i=0; i<editsss.length; i++){
            editsss[i].addEventListener('mouseover', ()=>{
                editsss[i].src = "images/edit_todo_2.png"
                info.innerText = "to-du nu deyisin"
            })
            editsss[i].addEventListener('mouseout', ()=>{
                editsss[i].src = "images/edit_todo_1.png"
                info.innerText = "info"
            })
            editsss[i].addEventListener('click', ()=>{
                inputcontainer.style.display = 'block';
                input.value = `${paredits[i].innerText}`;
                listiciss[i].style.display = 'none';
            })  
        }
        sill = document.querySelectorAll('.delete2');
        liiists = document.querySelectorAll('li');
        for(let i=0; i<sill.length; i++){
            sill[i].addEventListener('click', ()=>{
                liiists[i].remove();
                if(list_cont.children.length==0){
                    list_cont.style.display = 'none'
                    inputcontainer.style.display = 'block';
                    console.log('sifirdir');
                }
            })
        }
        plusbtn.addEventListener('click', ()=>{
            inputcontainer.style.display = 'block';
        })
    }else if(input.value.length == 0){
        warningresult.style.display = 'block';
        warningresult.innerHTML = 'Zehmet olmasa nese daxil edin';
    } 
})
    sort1.addEventListener('click', ()=>{
        console.log('1')
        sort1.style.display = 'none';
        sort2.style.display = 'block';
        ppp = document.querySelectorAll('p');
        let datap = [];
        for(let i=0; i<ppp.length; i++){
            datap.push(ppp[i].innerText);       
        }
        datap.sort();
        for(let i=0; i<datap.length; i++){
            ppp[i].innerHTML = datap[i];       
        }
    })
    sort2.addEventListener('click', ()=>{
        console.log('2')
        sort2.style.display = 'none';
        sort1.style.display = 'block';
        ppp = document.querySelectorAll('p');
        let datap = [];
        for(let i=0; i<ppp.length; i++){
            datap.push(ppp[i].innerText);       
        }
        datap.sort().reverse();
        for(let i=0; i<datap.length; i++){
            ppp[i].innerHTML = datap[i];
        }
    })             
input.addEventListener('keyup', (e)=>{
    if(e.target.value.length == 0){
        warningresult.style.display = 'block';
        warningresult.innerHTML = 'Zehmet olmasa nese daxil edin';
    }else if(e.target.value.length > 20){
        warningresult.style.display = 'block';
        warningresult.innerHTML = '20 xarakterden cox olmaz';
    }else{
        warningresult.style.display = 'none';
    }
})
    searchiconn.addEventListener('click', ()=>{
        searchinput.style.display = 'block';
        searchinput.addEventListener('keyup', (e)=>{
            searchppp = document.querySelectorAll('p');
            searchlistleri = document.querySelectorAll('li')
            for(let i=0; i<searchppp.length; i++){
                for(let j=0; j<searchppp[i].innerText.length; j++){
                    if(searchppp[i].textContent.toLowerCase().includes(searchinput.value.toLowerCase())){
                        searchlistleri[i].style.display = "";    
                    }else{ 
                        searchlistleri[i].style.display = "none"; 
                    }
                }
            }
        })
    })
    searchiconn.addEventListener('dblclick', ()=>{
        searchinput.style.display = 'none';
    })
new Sortable(list_cont, {
    animation: 350
});