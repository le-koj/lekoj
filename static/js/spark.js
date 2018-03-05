// Build a data source
var dataSrc = [["Richmond, 1st City" , 1, "Architecture", "Le Koj", "800 x 1422 px", "Richmond, Virginia", ["Canon", "sRGB IEC61966-2.1", "27 mm", "F/5.6", "2.5 s"]],
               ["Monument Dayz", 2, "General","Le Koj", "800 x 1200 px", "Richmond, Virginia", ["Canon", "sRGB IEC61966-2.1", "32 mm", "F/5", "1/320 s"]],
               ["Sensual Bliss", 3, "Sunset","Le Koj", "800 x 1422 px", "Newport Beach, California", ["Canon", "sRGB IEC61966-2.1", "18 mm", "F/18", "1/25 s"]],
               ["The Dock", 4, "Monochrome", "Le Koj", "800 x 1200 px", "Long Beach, California", ["Canon", "sRGB IEC61966-2.1", "50 mm", "F/1.8", "1/640 s"]],
               [ "Focus", 5, "Graphic Design", "Le Koj", "800 x 924 px", "Huntington Beach, California", ["Canon", "Adobe RGB (1998)", "50 mm", "F/1.8", "1/500 s"]],
               ["3Kate Bike Gang", 6, "Monochrome", "Le Koj", "800 x 1200 px", "Huntington Beach, California", ["Canon", "Adobe RGB (1998)", "50 mm", "F/1.8", "1/4000 s"]],
               ["Da Juceman", 7, "Monochrome", "Le Koj", "800 x 1200 px", "Richmond, Virginia", ["Canon", "sRGB IEC61966-2.1", "30 mm", "F/4.5", "1/10 s"]],
               ["The Record Player", 8, "Monochrome","Le Koj", "2848 x 4272 px", "Palm Springs, California", ["Canon", "Adobe RGB (1998)", "50 mm", "F/1.8", "1/80 s"]],
               ["Morrocan Dine", 9, "General", "Le Koj", "2848 x 4272 px", "Palm Springs, California", ["Canon", "Adobe RGB (1998)", "50 mm", "F/5.6", "1/250 s"]],
               ["Morrocan Dine II", 10, "Monochrome","Le Koj", "2848 x 4272 px", "Palm Springs, California", ["Canon", "Adobe RGB (1998)", "50 mm", "F/5.6", "1/250 s"]],
               ["Long Beach", 11, "Monochrome","Le Koj", "2403 x 4272 px", "Long Beach, California", ["Canon", "Adobe RGB (1998)", "55 mm", "F/5.6", "1/800 s"]],
               ["Culture", 12, "General", "Le Koj", "600 x 906 px", "Virginia", ["Nikon", "Adobe RGB (1998)", "55 mm", "F/5.6", "1/60 s"]],
               ["Kool Skate", 13, "Monochrome", "Le Koj", "600 x 1067 px", "Huntington Beach, California", ["Canon", "Adobe RGB (1998)", "50 mm", "F/3.5", "1/2000 s"]],
               ["FIFA", 14, "Surreal", "Le Koj", "600 x 900 px", "Richmond, Virginia", ["Canon", "ProPhoto RGB", "18 mm", "F/3.5", "1/20 s"]],
               ["Lost Sea", 15, "Monochrome", "Le Koj", "600 x 1067 px", "Long Beach, California", ["Canon", "Adobe RGB (1998)", "43 mm", "F/5", "1/800 s"]],
               ["Serenity In Chaos", 16, "Monochrome", "Le Koj", "600 x 900 px", "Newport Beach, California", ["Canon", "Adobe RGB (1998)", "18 mm", "F/3.5", "1/4000 s"]],
               ["The Beach", 17, "General", "Le Koj", "600 x 900 px", "Newport Beach, California", ["Canon", "Adobe RGB (1998)", "55 mm", "F/5.6", "1/2000 s"]],
               ["Ocean Sky", 18, "Monochrome", "Le Koj", "600 x 900 px", "Newport Beach, California", ["Canon", "Adobe RGB (1998)", "55 mm", "F/5.6", "1/2000 s"]],
               ["Graduation", 19, "Family", "Le Koj", "600 x 1010 px", "Richmond, Virginia", ["Canon", "Adobe RGB (1998)", "32 mm", "F/4.5", "1/30 s"]],
               ["Night Angel", 20, "Surreal", "Le Koj", "600 x 842 px", "Richmond, Virginia", ["Nikon", "Adobe RGB (1998)", "55 mm", "F/5.6", "1/1250 s"]],
               ["Christina Johnson", 21, "Graphic Design", "Le Koj", "600 x 1033 px", "Richmond, Virginia", ["Nikon", "Adobe RGB (1998)", "55 mm", "F/5.6", "1/1250 s"]],
               ["Royalty", 22, "General", "Le Koj", "600 x 900 px", "Richmond, Virginia", ["Canon", "sRGB IEC61966-2.1", "18 mm", "F/5", "1/25 s"]],
               ["Prodigy", 23, "Family", "Le Koj", "600 x 900 px", "Virginia", ["Canon", "sRGB IEC61966-2.1", "55 mm", "F/5.6", "1/250 s"]],
               ["Happiness", 24, "Monochrome", "Le Koj", "600 x 900 px", "Virginia", ["Canon", "Gray Gamma 2.2", "55 mm", "F/6.3", "1/100 s"]],
               ["Society", 25, "Monochrome", "Le Koj", "600 x 900 px", "Long Beach, California", ["Canon", "Adobe RGB (1998)", "50 mm", "F/1.8", "1/640 s"]],
               ["Sunset Surf City", 26, "Sunset", "Le Koj", "600 x 960 px", "Huntington Beach, California", ["Canon", "Adobe RGB (1998)", "18 mm", "F/3.5", "1/4000 s"]],
               ["Sundown Surf City", 27, "Sunset", "Le Koj", "600 x 900 px", "Huntington Beach, California", ["Canon", "Adobe RGB (1998)", "28 mm", "F/4.5", "1/5000 s"]],
               ["Fly USA", 28, "General", "Le Koj", "600 x 900 px", "Huntington Beach, California", ["Canon", "Adobe RGB (1998)", "50 mm", "F/1.8", "1/4000 s"]],
               ["Independence Day", 29, "Graphic Design","Le Koj", "600 x 781 px", "Huntington Beach, California", ["Canon", "Adobe RGB (1998)", "50 mm", "F/1.8", "1/2000 s"]]
             ];

var album = new AlbumMaker(dataSrc);         // initiate AlbumMaker

// DOM structure for 'album maker'
var portraitDOM= '<figure class="frame" id="alpha_gallery" data-category="" ><img class= "pop" src= "" alt= ""/></figure>';

// DOM structure for 'thumbnail maker'
var thumbnailDOM= '<div class= "thumbnail" id=""><img class= "thumbnail_image" src= ""/></div>' ;

//album.createGallery(portraitDOM, '#photo_gallery');                    // build main gallery
//album.createThumbnail(thumbnailDOM, '#thumbnail_scroll');    // build thumbnail gallery
