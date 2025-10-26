function show(sec) {
                const sections = document.querySelectorAll('.step');
                sections.forEach((section) => (section.style.display = 'none'));
                var x = document.getElementById(sec);
                if (x) {
                    x.style.display = 'block';
                }
            }