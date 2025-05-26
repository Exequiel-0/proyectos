/* Animación con JavaScript */
<script>
    document.addEventListener("DOMContentLoaded", function() {
        const card = document.querySelector(".card");
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        setTimeout(() => {
            card.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";200);
            }
    
</script>