function toggleMenu()
{
    let menu = document.getElementById("navMenu");

    if(menu.style.display === "block")
    {
        menu.style.display = "none";
    }
    else
    {
        menu.style.display = "block";
    }
}

document.getElementById("contactForm").addEventListener("submit", function(event)
{
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    alert(
        "Name: " + name +
        "\nEmail: " + email +
        "\nMessage: " + message
    );

    this.reset();
});