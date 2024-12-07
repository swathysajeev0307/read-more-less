/* COPYRIGHT (C) 2024 - SWATHYMOL SAJEEV | GNU General Public License v3.0

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, 
either version 3 of the License, or (at your option) any later version. This program is distributed in the hope that it will be useful,but WITHOUT ANY WARRANTY; 
without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>. */

function readMore(){
    const dots = document.getElementById("dots");
    const moreText = document.getElementById("more");
    const btnText = document.getElementById("myBtn");

    if(dots.style.display === "none"){
        dots.style.display === "inline";
        btnText.innerHTML = "Read More";
        moreText.style.display = "none";
    }else{
        dots.style.display =  "none";
        btnText.innerHTML = "Read Less";
        moreText.style.display = "inline";
    }
}