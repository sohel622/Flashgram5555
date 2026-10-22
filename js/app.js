// Flashgram Main JavaScript

document.addEventListener('DOMContentLoaded', () => {
    
    // ১. লাইক বাটন ফাংশনালিটি
    const likeButtons = document.querySelectorAll('.post-footer button:first-child');
    
    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const likeCountSpan = button.querySelector('.like-count');
            let currentLikes = parseInt(likeCountSpan.textContent);
            
            // চেক করা হচ্ছে আগে লাইক করা হয়েছে কি না
            if (button.classList.contains('liked')) {
                button.classList.remove('liked');
                button.style.color = '#94a3b8'; // ডিফল্ট কালার
                likeCountSpan.textContent = currentLikes - 1;
            } else {
                button.classList.add('liked');
                button.style.color = '#ec4899'; // পিংক/লাইক কালার
                likeCountSpan.textContent = currentLikes + 1;
            }
        });
    });

    // ২. বটম নেভিগেশন বার অ্যাক্টিভ সুইচিং
    const navItems = document.querySelectorAll('.bottom-nav .nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            // আগের অ্যাক্টিভ ক্লাস রিমूव করা
            navItems.forEach(nav => nav.classList.remove('active'));
            // নতুনটিতে অ্যাক্টিভ ক্লাস যোগ করা
            item.classList.add('active');
        });
    });

    // ৩. পোস্ট সাবমিট বাটন অ্যালার্ট (টেস্টিংয়ের জন্য)
    const postSubmitBtn = document.querySelector('.post-submit');
    if (postSubmitBtn) {
        postSubmitBtn.addEventListener('click', () => {
            alert('আপনার Flashgram পোস্টটি সফলভাবে তৈরি হয়েছে! (এটি টেস্টিং মোডে আছে)');
        });
    }

});
