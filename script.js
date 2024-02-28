document.addEventListener('DOMContentLoaded', function() {
                        const taskInput = document.getElementById('task-input');
                        const addTaskBtn = document.getElementById('add-task-btn');
                        const tasksList = document.getElementById('tasks-list');
                        const weeklyGoalsInput = document.getElementById('weekly-goals');
                        const availableTimeInput = document.getElementById('available-time');
                        const thankYouMessage = document.getElementById('thank-you-message');
                    
                        let totalWorkHours = 0;
                        let weeklyGoals = '';
                    
                        addTaskBtn.addEventListener('click', function() {
                            const taskText = taskInput.value.trim();
                            const taskTime = parseFloat(availableTimeInput.value);
                    
                            if (taskText !== '' && !isNaN(taskTime) && taskTime > 0) {
                                const taskItem = createTaskItem(taskText, taskTime);
                                tasksList.appendChild(taskItem);
                                taskInput.value = '';
                                totalWorkHours += taskTime;
                                updateThankYouMessage();
                            } else {
                                alert('الرجاء إدخال مهمة ووقت صحيح');
                            }
                        });
                    
                        function createTaskItem(taskText, taskTime) {
                            const li = document.createElement('li');
                            const span = document.createElement('span');
                            const timeSpan = document.createElement('span');
                            const heartIcon = document.createElement('span');
                    
                            span.textContent = taskText;
                            timeSpan.textContent = `(${taskTime} ساعة)`;
                            heartIcon.innerHTML = '&#10084;';
                            heartIcon.className = 'heart-icon';
                            heartIcon.addEventListener('click', function() {
                                li.remove();
                                totalWorkHours -= taskTime;
                                updateThankYouMessage();
                            });
                    
                            li.appendChild(span);
                            li.appendChild(timeSpan);
                            li.appendChild(heartIcon);
                            return li;
                        }
                    
                        function updateThankYouMessage() {
                            thankYouMessage.textContent = `شكرًا لإكمال مهامك! لقد قضيت ${totalWorkHours} ساعة على العمل هذا اليوم.`;
                        }
                    });
                    