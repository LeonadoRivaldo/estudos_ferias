let start = (function startFunction(window, document) {
  return function(user){
    console.log("Welcome, " + user + "!!");
  }
})(window, document);

function welcomeUser(resolve, reject){
  let user = prompt("Who are you?");
  start( user );
  document.getElementById('user').innerText = "Welcome, " + user + "!!";
  return resolve(true);
}
function consoleLog(result){
  var users;
  console.time("ajax");

  return $.ajax({
    url:"https://reqres.in/api/users?per_page=10",
    method:"GET",
    success:function(response) {
      users = response;
      console.log("##################\nConsole Log function\n##################");
      console.log('console.log ===>', response);
    }
  })
  .then(function(result) {
    console.timeEnd("ajax");
    return Promise.resolve(result);
  });
}
function consoleAssert(users) {
  console.log("##################\nConsole Assert function\n##################");
  console.assert(users.per_page === 4, "[Error]: per_page is not true");
  return Promise.resolve(users);
}
function consoleClear(users){
  for(let k = 0; k<1000;k++){console.log('log==> '+ k);}
  console.clear();
  console.log("##################\nConsole Clear function\n##################");
  console.log('users =>', users.data);
  return Promise.resolve(users);
}
function consoleCount(users){
  console.clear();
  let countFoo = k=> console.count(label);
  let label = "counting.";
  let array = Array.from({length: 100});
  console.log("############################\nConsole Count function\n############################");
  array.forEach(countFoo);
  return Promise.resolve(users);
}
function consoleDirDirxml(users){
  console.clear();
  console.log("############################\nConsole dir or dirxml function\n############################");
  console.log("console log ===>", document.body);
  console.log("console dir ===>");
  console.dir(document.body);
  console.log("console dirxml ===>");
  console.dirxml(document.body);
  return Promise.resolve(users);
}
function consoleError(users){
  console.clear();
  console.log("############################\nConsole error function\n############################");

  return $.ajax({
    url:"fake.com.br",
    method:"GET",
    error:function(responseError) {
      console.log('ERR ===>', responseError.statusText);
      console.error(responseError.statusText);
      return Promise.resolve(true);
    }
  })
  .then(function(result) {
    return Promise.resolve(users);
  })
  .catch((err) => {
    return Promise.resolve(users);
  })
}
function consoleGroupGroupCollapseGroupEnd(users){
  function logUser(user){
    console.groupCollapsed("User");
    console.groupCollapsed("Id");
      console.log(user.id);
    console.groupEnd();
    console.groupCollapsed("Name");
      console.log(user.first_name + " " + user.last_name);
    console.groupEnd();
    console.groupCollapsed('Avatar');
      console.log(user.avatar);
    console.groupEnd();
    console.groupEnd();
  }
  console.clear();
  console.log("############################\nConsole consoleGroupGroupCollapseGroupEnd function\n############################");
  users.data.forEach(logUser);
  return Promise.resolve(users);
}
function consoleInfo(users){
  console.clear();
  console.log("############################\nConsole info function\n############################");
  users.data.forEach(u=> console.info(u.avatar) );
  return Promise.resolve(users);
}
function _consoleLog(users){
  console.clear();
  console.log("############################\nConsole _consoleLog function\n############################");
  users.data.forEach(u=> console.log('%cUser %s %s has id %d and it\'s avatar %c%s','color:purple;font-size:14px;',u.first_name,u.last_name,u.id,'color:blue',u.avatar) );
  return Promise.resolve(users);
}
function consoleTable(users){
  console.clear();
  console.log("############################\nConsole table function\n############################");
  console.table(users.data);
  return Promise.resolve(users);
}
function consoleTime(users) {
  console.clear();
  console.log("############################\nConsole consoleTime function\n############################");
  var array = Array.from({length:10000});
  console.time("for loop");
  for(let i=0;i<array.length;i++){}
  console.timeEnd("for loop");
  console.time("forEach");
  array.forEach(v=>true);
  console.timeEnd("forEach");
  console.time("array map");
  array.map(v=>true);
  console.timeEnd("array map");
  return Promise.resolve(users);
}
function consoleTrace(users){
  console.clear();
  console.log("############################\nConsole consoleTime function\n############################");
  function stack(){
    stack2();
  }
  function stack2(){
    stack3();
  }
  function stack3(){
    stack4();
  }
  function stack4(){
    console.trace("stack trace");
  }

  stack();

  return Promise.resolve(users);
}
function consoleWarn(users){
  console.clear();
  console.log("############################\nConsole consoleWarn function\n############################");
  console.warn("this is warning");
  return Promise.resolve(users);
}

window.onload = function(){
  new Promise(welcomeUser)
  .then(consoleLog)
  .then(consoleAssert)
  .then(consoleClear)
  .then(consoleCount)
  .then(consoleDirDirxml)
  .then(consoleError)
  .then(consoleGroupGroupCollapseGroupEnd)
  .then(consoleInfo)
  .then(_consoleLog)
  .then(consoleTable)
  .then(consoleTime)
  .then(consoleTrace)
  .then(consoleWarn)
  .catch((err) => {
    console.log(err);
  })
}
