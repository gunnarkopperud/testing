let obj=[];
obj[0] = {a: "Hello", b: "World"};
obj[1] = {a: "godbye", b: "Lord"};
obj[2] = {a: "Hello", b: "World"};
obj[3] = {a: "Hello", b: "World"};
obj[4] = {a: "Hello", b: "World"};
localStorage.setItem("test",JSON.stringify(obj));
text = localStorage.getItem("test");
obj= JSON.parse(text);
obj.push({a: "Halloen", b: "Gunnar"});
localStorage.setItem("test",JSON.stringify(obj));
