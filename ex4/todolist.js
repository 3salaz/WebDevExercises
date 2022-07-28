window.onload = function () {
    // bootlint.showLintReportForCurrentDocument([], {
    //     hasProblems: false,
    //     problemFree: false
    // });

    $('[data-toggle="tooltip"]').tooltip();

    function formatDate(date) {
        return (
            date.getDate() +
            "/" +
            (date.getMonth() + 1) +
            "/" +
            date.getFullYear()
        );
    }

    let currentDate = formatDate(new Date());

    $(".due-date-button").datepicker({
        format: "dd/mm/yyyy",
        autoclose: true,
        todayHighlight: true,
        startDate: currentDate,
        orientation: "bottom right"
    });

    $(".due-date-button").on("click", function (event) {
        $(".due-date-button")
            .datepicker("show")
            .on("changeDate", function (dateChangeEvent) {
                $(".due-date-button").datepicker("hide");
                $(".due-date-label").text(formatDate(dateChangeEvent.date));
            });
    });

    // 
    //     ADD YOUR CODE BELOW
    let todoList = [
        {
            'id': 1,
            'title': 'Learn JavaScript',

        },
        {},
];
    let addTaskBtn = document.getElementById("addTaskBtn");
    let taskList = document.getElementById("taskList");
    addTaskBtn.onclick = function () {
        console.log(getVal());
        
    }
    function getVal() {
        const addTodoInput = document.querySelector('.add-todo-input').value;
        let newTask = {
            'Task': addTodoInput,
        }
        return newTask;
    }

    function addTask(task) {
        taskList.innerHTML += `<div class="row px-3 align-items-center todo-item rounded">
        <div class="col-auto m-1 p-0 d-flex align-items-center">
            <h2 class="m-0 p-0">
                <i class="fa fa-square-o text-primary btn m-0 p-0" data-toggle="tooltip" data-placement="bottom" title="Mark as complete"></i>
                <i class="fa fa-check-square-o text-primary btn m-0 p-0 d-none" data-toggle="tooltip" data-placement="bottom" title="Mark as todo"></i>
            </h2>
        </div>
        <div class="col px-1 m-1 d-flex align-items-center">
            <input type="text" class="form-control form-control-lg border-0 edit-todo-input bg-transparent rounded px-3" readonly value="${addTodoInput}" title="${addTodoInput}" />
            <input type="text" class="form-control form-control-lg border-0 edit-todo-input rounded px-3 d-none" value="${addTodoInput}" />
        </div>
        <div class="col-auto m-1 p-0 px-3">
            <div class="row">
                <div class="col-auto d-flex align-items-center rounded bg-white border border-warning">
                    <i class="fa fa-hourglass-2 my-2 px-2 text-warning btn" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Due on date"></i>
                    <h6 class="text my-2 pr-2">28th Jun 2020</h6>
                </div>
            </div>
        </div>
        <div class="col-auto m-1 p-0 todo-actions">
            <div class="row d-flex align-items-center justify-content-end">
                <h5 class="m-0 p-0 px-2">
                    <i class="fa fa-pencil text-info btn m-0 p-0" data-toggle="tooltip" data-placement="bottom" title="Edit todo"></i>
                </h5>
                <h5 class="m-0 p-0 px-2">
                    <i class="fa fa-trash-o text-danger btn m-0 p-0" data-toggle="tooltip" data-placement="bottom" title="Delete todo"></i>
                </h5>
            </div>
            <div class="row todo-created-info">
                <div class="col-auto d-flex align-items-center pr-2">
                    <i class="fa fa-info-circle my-2 px-2 text-black-50 btn" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Created date"></i>
                    <label class="date-label my-2 text-black-50">28th Jun 2020</label>
                </div>
            </div>
        </div>
                              </div>`
    }
};
