// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import Rails from "@rails/ujs";
Rails.start();


document.addEventListener('DOMContentLoaded', () => {
    console.log('### Rails UJS is working');
  });
  