create table status_type (
  stty_id int not null primary key,
  stty_name varchar(50) not null
);

create table product_type (
  prty_id int not null primary key,
  prty_name varchar(50) not null
);

create table status (
  stat_id int not null primary key,
  stat_name varchar(50) not null,
  stty_id int not null,
  foreign key (stty_id) references status_type(stty_id)
);

create table product (
  prod_id int not null primary key,
  prod_name varchar(50) not null,
  prod_url_image_principal varchar(500) not null,
  prod_url_image_secondary varchar(500),
  prod_description_sm varchar(500),
  prod_description_lg varchar(5000),
  prod_date date not null,
  prod_price int not null,
  prod_stock int not null,
  stat_id int not null,
  prty_id int not null,
  foreign key (stat_id) references status(stat_id),
  foreign key (prty_id) references product_type(prty_id)
);

create table image (
  imag_id int not null primary key,
  imag_url varchar(500) not null,
  imag_order int not null,
  prod_id int not null,
  foreign key (prod_id) references product(prod_id)
);

INSERT INTO `product_type` (`prty_id`, `prty_name`) VALUES
(1, 'Amigurumi');

INSERT INTO `status_type` (`stty_id`, `stty_name`) VALUES
(1, 'Producto');

INSERT INTO `status` (`stat_id`, `stat_name`, `stty_id`) VALUES
(1, 'Activo', 1);

INSERT INTO `product` (`prod_id`, `prod_name`, `prod_description_sm`, `prod_price`, `prod_url_image_principal`, `prod_url_image_secondary`, `prod_description_lg`, `prod_date`, `prod_stock`, `stat_id`, `prty_id`) VALUES
(1, 'Jirafa Rafa', 'La jirafa Rafa te encantará con sus colores y estilos infinitos', 14000, 'JIRAFA001/JIRAFA001_1_400X400.JPG', NULL, '', CURRENT_DATE, 0, 1, 1),
(2, 'Zorro Oscar', 'La jirafa Rachel es coqueta y será tu gran compañera de baile', 14000, 'ZORRO002/ZORRO002_1_400X400.JPG', NULL, '', CURRENT_DATE, 0, 1, 1),
(3, 'Dinosaurio Teo', 'Teosaurio, como le dicen sus amigos, te conquistará con su ternura', 14000, 'TEO001/TEO001_1_300X300.PNG', 'TEO001/TEO001_1_BKGND_300X300.PNG', '', CURRENT_DATE, 0, 1, 1),
(4, 'Dinosaurio Terry', 'La dinosaurio Terry es delicada y compartirá contigo sus pasos de ballet', 14000, 'TERRY001/TERRY001_1_300X300.PNG', NULL, '', CURRENT_DATE, 0, 1, 1),
(5, 'Unicornio Lino', 'Lino será un gran compañero lleno de encanto y dulzura', 14000, 'UNICORNIO001/UNICORNIO001_1_400X400.JPG', NULL, '', CURRENT_DATE, 0, 1, 1),
(6, 'Unicornio Lana', 'Lana te llenará de brillo y colores', 14000, 'UNICORNIO002/UNICORNIO002_1_400X400.JPG', NULL, '', CURRENT_DATE, 0, 1, 1),
(7, 'Oso Panda Rudy', 'Rudy parece formal y muy ordenado, pero será tu compañero de juegos', 14000, '', NULL, '', CURRENT_DATE, 0, 1, 1),
(8, 'Oso Panda Rina', 'Rina es delicada y tierna, te acompañará a donde vayas', 14000, '', NULL, '', CURRENT_DATE, 0, 1, 1),
(9, 'Conejo Mateo', 'Mateo es el favorito a la hora de la siesta. Te encantará con su suavidad', 14000, 'CONEJO001/CONEJO001_1_400X400.JPG', NULL, '', CURRENT_DATE, 0, 1, 1),
(10, 'Coneja Matilde', 'Matilde será tu compañera a donde quiera que vayas', 14000, 'CONEJA001/CONEJA001_1_400X400.JPG', NULL, '', CURRENT_DATE, 0, 1, 1),
(11, 'Mapache Polo', 'Polo te acompañará en todos tus juegos', 14000, 'MAPACHE001/MAPACHE001_1_400X400.JPG', NULL, '', CURRENT_DATE, 0, 1, 1),
(12, 'Zorro Franz Fox', 'Franz Fox promete ser un gran amigo', 14000, 'ZORRO001/ZORRO001_1_400X400.JPG', NULL, '', CURRENT_DATE, 0, 1, 1),
(13, 'Lobo Sam Wolf', 'Con Sam Wolf podrás compartir todas tus aventuras', 14000, 'LOBO001/LOBO001_1_400X400.JPG', NULL, '', CURRENT_DATE, 0, 1, 1),
(14, 'León Leonardo', 'León se cree muy feroz, pero te cautivará con tu ternura', 14000, 'LEON001/LEON001_1_400X400.JPG', NULL, '', CURRENT_DATE, 0, 1, 1);

INSERT INTO `image` (`imag_id`, `imag_url`, `imag_order`, `prod_id`) VALUES
(1, '', 1, 1);

drop table image;
drop table product;
drop table status;
drop table status_type;
drop table product_type;
