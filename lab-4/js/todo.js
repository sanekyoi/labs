document.addEventListener('DOMContentLoaded', function(){  
    document.querySelector('#push').onclick = function(){
        if(document.querySelector('#newtask input').value.length == 0){
            alert("Пожалуйста, введите задачу!");
        } else {
            // Удаляем сообщение о пустом списке если оно есть
            let emptyMsg = document.querySelector('.empty-message');
            if(emptyMsg){
                emptyMsg.remove();
            }

            document.querySelector('#tasks').innerHTML += `
                <div class="task">
                    <span id="taskname">
                        ${document.querySelector('#newtask input').value}
                    </span>
                    <button class="delete">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18M6 6L18 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
            `;

            // Очищаем поле ввода
            document.querySelector('#newtask input').value = "";

            // Добавляем обработчики для кнопок удаления
            var current_tasks = document.querySelectorAll(".delete");
            for(var i=0; i<current_tasks.length; i++){
                current_tasks[i].onclick = function(){
                    this.parentNode.remove();
                    
                    // Если задач не осталось, показываем сообщение
                    if(document.querySelectorAll('.task').length === 0){
                        document.querySelector('#tasks').innerHTML = '<div class="empty-message">Задачи отсутствуют</div>';
                    }
                }
            }
        }
    }

    // Добавляем обработчик для Enter
    document.querySelector('#newtask input').addEventListener('keypress', function(e){
        if(e.key === 'Enter'){
            document.querySelector('#push').click();
        }
    });

    // Показываем сообщение о пустом списке при загрузке
    document.querySelector('#tasks').innerHTML = '<div class="empty-message">Задачи отсутствуют</div>';
});
