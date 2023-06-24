/*$(document).ready(function () {
  var item, title, author, publisher, bookLink, bookImg;
  var outputList = document.getElementById("list-output");
  var bookUrl = "https://www.googleapis.com/books/v1/volumes?q=";
  var apiKey = "AIzaSyDtXC7kb6a7xKJdm_Le6_BYoY5biz6s8Lw";
  var placeHldr = "150.jpg";
  var searchData;
  var startIndex = 0;
  var maxResults = 10;
  var isLoading = false;

  $("#search").click(function () {
    outputList.innerHTML = "";
    document.body.style.backgroundImage = "url('')";
    searchData = $("#search-box").val();
    if (searchData === "" || searchData === null) {
      displayError();
    } else {
      startIndex = 0;
      searchBooks();
    }
    $("#search-box").val("");
  });

  $(window).scroll(function () {
    if (
      $(window).scrollTop() + $(window).height() >=
        $(document).height() - 200 &&
      !isLoading
    ) {
      startIndex += maxResults;
      searchBooks();
    }
  });

  function searchBooks() {
    isLoading = true;
    $.ajax({
      url:
        bookUrl +
        searchData +
        "&startIndex=" +
        startIndex +
        "&maxResults=" +
        maxResults +
        "&" +
        apiKey,
      dataType: "json",
      success: function (response) {
        console.log(response);
        if (response.totalItems === 0) {
          alert("No results! Please try again.");
        } else {
          $("#title").animate({ "margin-top": "5px" }, 1000);
          $(".book-list").css("visibility", "visible");
          displayResults(response);
        }
        isLoading = false;
      },
      error: function () {
        alert("Something went wrong. Please try again!");
        isLoading = false;
      },
    });
  }

  function displayResults(response) {
    var books = response.items;
    var totalItems = response.totalItems;

    for (var i = 0; i < books.length; i += 2) {
      var item1 = books[i];
      var item2 = books[i + 1];
      var title1 = item1.volumeInfo.title;
      var author1 = item1.volumeInfo.authors;
      var publisher1 = item1.volumeInfo.publisher;
      var bookLink1 = item1.volumeInfo.previewLink;
      var bookIsbn1 = item1.volumeInfo.industryIdentifiers[1];
      var bookImg1 = item1.volumeInfo.imageLinks
        ? item1.volumeInfo.imageLinks.thumbnail
        : placeHldr;

      var output = "";

      output += '<div class="col-lg-6">';
      output += '<div class="card">';
      output += '<div class="row no-gutters">';
      output += '<div class="col-md-4">';
      output +=
        '<img src="' + bookImg1 + '" class="card-img" alt="Book Cover">';
      output += "</div>";
      output += '<div class="col-md-8">';
      output += '<div class="card-body">';
      output += '<h5 class="card-title">' + title1 + "</h5>";
      output += '<p class="card-text">Author: ' + author1 + "</p>";
      output += '<p class="card-text">Publisher: ' + publisher1 + "</p>";
      output +=
        '<a target="_blank" href="' +
        bookLink1 +
        '" class="btn btn-secondary">Read Book</a>';
      output += "</div>";
      output += "</div>";
      output += "</div>";
      output += "</div>";
      output += "</div>";

      if (item2) {
        var title2 = item2.volumeInfo.title;
        var author2 = item2.volumeInfo.authors;
        var publisher2 = item2.volumeInfo.publisher;
        var bookLink2 = item2.volumeInfo.previewLink;
        var bookIsbn2 = item2.volumeInfo.industryIdentifiers[1];
        var bookImg2 = item2.volumeInfo.imageLinks
          ? item2.volumeInfo.imageLinks.thumbnail
          : placeHldr;

        output += '<div class="col-lg-6">';
        output += '<div class="card">';
        output += '<div class="row no-gutters">';
        output += '<div class="col-md-4">';
        output +=
          '<img src="' + bookImg2 + '" class="card-img" alt="Book Cover">';
        output += "</div>";
        output += '<div class="col-md-8">';
        output += '<div class="card-body">';
        output += '<h5 class="card-title">' + title2 + "</h5>";
        output += '<p class="card-text">Author: ' + author2 + "</p>";
        output += '<p class="card-text">Publisher: ' + publisher2 + "</p>";
        output +=
          '<a target="_blank" href="' +
          bookLink2 +
          '" class="btn btn-secondary">Read Book</a>';
        output += "</div>";
        output += "</div>";
        output += "</div>";
        output += "</div>";
        output += "</div>";
      }

      outputList.innerHTML += '<div class="row mt-4">' + output + "</div>";
    }

    if (startIndex >= totalItems) {
      $(window).off("scroll");
    }
  }

  function displayError() {
    alert("Search term cannot be empty!");
  }
});*/
$(document).ready(function () {
  var item, title, author, publisher, bookLink, bookImg;
  var outputList = document.getElementById("list-output");
  var bookUrl = "https://www.googleapis.com/books/v1/volumes?q=";
  var apiKey = "AIzaSyDtXC7kb6a7xKJdm_Le6_BYoY5biz6s8Lw";
  var placeHldr = "150.jpg";
  var searchData;
  var startIndex = 0;
  var maxResults = 10;
  var isLoading = false;

  $("#search").click(function () {
    outputList.innerHTML = "";
    document.body.style.backgroundImage = "url('')";
    searchData = $("#search-box").val();
    if (searchData === "" || searchData === null) {
      displayError();
    } else {
      startIndex = 0;
      searchBooks();
    }
    $("#search-box").val("");
  });

  $(window).scroll(function () {
    if (
      $(window).scrollTop() + $(window).height() >=
        $(document).height() - 200 &&
      !isLoading
    ) {
      startIndex += maxResults;
      searchBooks();
    }
  });

  function searchBooks() {
    isLoading = true;
    $.ajax({
      url:
        bookUrl +
        searchData +
        "&startIndex=" +
        startIndex +
        "&maxResults=" +
        maxResults +
        "&" +
        apiKey,
      dataType: "json",
      success: function (response) {
        console.log(response);
        if (response.totalItems === 0) {
          alert("No results! Please try again.");
        } else {
          $("#title").animate({ "margin-top": "5px" }, 1000);
          $(".book-list").css("visibility", "visible");
          displayResults(response);
        }
        isLoading = false;
      },
      error: function () {
        alert("Something went wrong. Please try again!");
        isLoading = false;
      },
    });
  }

  function displayResults(response) {
    var books = response.items;
    var totalItems = response.totalItems;

    for (var i = 0; i < books.length; i += 2) {
      var item1 = books[i];
      var item2 = books[i + 1];
      var title1 = item1.volumeInfo.title;
      var author1 = item1.volumeInfo.authors;
      var publisher1 = item1.volumeInfo.publisher;
      var bookLink1 = item1.volumeInfo.previewLink;
      var bookIsbn1 = item1.volumeInfo.industryIdentifiers[1];
      var bookImg1 = item1.volumeInfo.imageLinks
        ? item1.volumeInfo.imageLinks.thumbnail
        : placeHldr;

      var output = "";

      output += '<div class="col-lg-6">';
      output += '<div class="card">';
      output += '<div class="row no-gutters">';
      output += '<div class="col-md-4">';
      output +=
        '<img src="' + bookImg1 + '" class="card-img" alt="Book Cover">';
      output += "</div>";
      output += '<div class="col-md-8">';
      output += '<div class="card-body">';
      output += '<h5 class="card-title">' + title1 + "</h5>";
      output += '<p class="card-text">Author: ' + author1 + "</p>";
      output += '<p class="card-text">Publisher: ' + publisher1 + "</p>";
      output +=
        '<a target="_blank" href="' +
        bookLink1 +
        '" class="btn btn-secondary">Read Book</a>';
      output += "</div>";
      output += "</div>";
      output += "</div>";
      output += "</div>";
      output += "</div>";

      if (item2) {
        var title2 = item2.volumeInfo.title;
        var author2 = item2.volumeInfo.authors;
        var publisher2 = item2.volumeInfo.publisher;
        var bookLink2 = item2.volumeInfo.previewLink;
        var bookIsbn2 = item2.volumeInfo.industryIdentifiers[1];
        var bookImg2 = item2.volumeInfo.imageLinks
          ? item2.volumeInfo.imageLinks.thumbnail
          : placeHldr;

        output += '<div class="col-lg-6">';
        output += '<div class="card">';
        output += '<div class="row no-gutters">';
        output += '<div class="col-md-4">';
        output +=
          '<img src="' + bookImg2 + '" class="card-img" alt="Book Cover">';
        output += "</div>";
        output += '<div class="col-md-8">';
        output += '<div class="card-body">';
        output += '<h5 class="card-title">' + title2 + "</h5>";
        output += '<p class="card-text">Author: ' + author2 + "</p>";
        output += '<p class="card-text">Publisher: ' + publisher2 + "</p>";
        output +=
          '<a target="_blank" href="' +
          bookLink2 +
          '" class="btn btn-secondary">Read Book</a>';
        output += "</div>";
        output += "</div>";
        output += "</div>";
        output += "</div>";
        output += "</div>";
      }

      outputList.innerHTML += '<div class="row mt-4">' + output + "</div>";
    }

    if (startIndex >= totalItems) {
      $(window).off("scroll");
    }
  }

  function displayError() {
    alert("Search term cannot be empty!");
  }
});
