// Kieu du lieu cua JS
const dataStructureDemo = () => {
    let a = '  hello world I am midzy   ';
    //a = 1999;
    console.log(a);
    console.log(a.length);
    console.log(a.includes('hello'));
    // function trim() de xoa khoang cach
    console.log(a.trim());
    console.log(a.split(' '));

    let arr = [1, 2, 3, 4, 5, 1, 1];
    let arr2 = [];
    arr.push(6);
    arr.unshift(0);
    console.log(arr);

    // console.log(arr.length);
    // console.log(arr.lastIndexOf(1));

    arr2 = arr.filter(item => item > 2);
    console.log(arr2);

    arr2 = arr.map(item => item*2);
    console.log(arr2);

    const student = {
        name: "Ryujin",
        age: 19,
        sing: () =>{
            console.log('sing a song');
        }
    };
    student.name = "Yuna";
    console.log(student.name);
    student.sing();

    const date = new Date();
    console.log(date.getDay());
    console.log(date.getDate());

    const dayOfWeek = ['Thu 2', 'Thu 3', 'Thu 4', 'Thu 5', 'Thu 6', 'Thu 7', 'Chu Nhat'];
    console.log(dayOfWeek[date.getDay() - 1]);
    console.log(date.getFullYear())
}

dataStructureDemo();

let isHidden = false
document.querySelector('#myButton').addEventListener('click', () => {
    console.log('Button Click')
    document.querySelector('.parent').style = isHidden ? "display:block" : "display:none"
    isHidden = !isHidden
})