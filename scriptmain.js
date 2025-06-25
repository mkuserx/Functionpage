        // Simular progreso de carga
        document.addEventListener('DOMContentLoaded', function() {
            const progressBar = document.getElementById('progressBar');
            let progress = 0;
            const interval = setInterval(() => {
                progress += Math.random() * 5;
                if (progress >= 100) {
                    progress = 100;
                    clearInterval(interval);
                }
                progressBar.style.width = progress + '%';
            }, 54009);
            
            const countdownDate = new Date();
            countdownDate.setHours(countdownDate.getHours() + 24);
            
            function updateCountdown() {
                const now = new Date().getTime();
                const distance = countdownDate - now;
                
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
                document.getElementById('days').textContent = days.toString().padStart(2, '0');
                document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
                document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
                document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
                
                if (distance < 0) {
                    clearInterval(countdownInterval);
                    document.getElementById('countdown').innerHTML = '<div style="color: var(--accent-color); font-weight: bold;">¡El sitio está listo! Actualiza la página.</div>';
                }
            }
            
            updateCountdown();
            const countdownInterval = setInterval(updateCountdown, 1000);
            
            
            const contactBtn = document.getElementById('contactBtn');
            const contactModal = document.getElementById('contactModal');
            const closeModal = document.getElementById('closeModal');
            
            contactBtn.addEventListener('click', () => {
                contactModal.style.display = 'flex';
            });
            
            closeModal.addEventListener('click', () => {
                contactModal.style.display = 'none';
            });
            
            window.addEventListener('click', (e) => {
                if (e.target === contactModal) {
                    contactModal.style.display = 'none';
                }
            });
            
            setTimeout(() => {
                contactModal.style.display = 'flex';
            }, 2000);
        });
