-- Seteo de codificación

SET client_encoding = 'UTF8';

-- Creación de tablas

CREATE TABLE public.tb_modulos (
    "idModulo" BIGSERIAL PRIMARY KEY,
    "Nombre" character varying(30) NOT NULL,
    "Activo" boolean NOT NULL,
    "FechaHoraCreacion" TIMESTAMP,
    "UsuarioCreacion" character varying(50),
    "FechaHoraModificacion" TIMESTAMP,
    "UsuarioModificacion" character varying(50)
);

CREATE TABLE public.tb_permisos (
    "idPermiso" BIGSERIAL PRIMARY KEY,
    "idModulo" BIGSERIAL NOT NULL,
    "Nombre" character varying(30) NOT NULL,
    "Activo" boolean NOT NULL,
    "FechaHoraCreacion" TIMESTAMP,
    "UsuarioCreacion" character varying(50),
    "FechaHoraModificacion" TIMESTAMP,
    "UsuarioModificacion" character varying(50),
    FOREIGN KEY ("idModulo") REFERENCES public.tb_modulos("idModulo")
);

CREATE TABLE public.tb_roles (
    "idRol" BIGSERIAL PRIMARY KEY,
    "Nombre" character varying(30) NOT NULL,
    "Activo" boolean NOT NULL,
    "Descripcion" text NOT NULL,
    "FechaHoraCreacion" TIMESTAMP,
    "UsuarioCreacion" character varying(50),
    "FechaHoraModificacion" TIMESTAMP,
    "UsuarioModificacion" character varying(50)
);

CREATE TABLE public.tb_rolpermisos (
    "idRolPermiso" BIGSERIAL PRIMARY KEY,
    "idPermiso" BIGSERIAL NOT NULL,
    "idRol" BIGSERIAL NOT NULL,
    "Activo" boolean NOT NULL,
    "FechaHoraCreacion" TIMESTAMP,
    "UsuarioCreacion" character varying(50),
    "FechaHoraModificacion" TIMESTAMP,
    "UsuarioModificacion" character varying(50),    
    FOREIGN KEY ("idPermiso") REFERENCES public.tb_permisos("idPermiso"),
    FOREIGN KEY ("idRol") REFERENCES public.tb_roles("idRol")
);

CREATE TABLE public.tb_usuarios (
    "idUsuario" BIGSERIAL PRIMARY KEY,
    "idRol" BIGSERIAL NOT NULL,
    "Nombre" character varying(50) NOT NULL,
    "Apellidos" character varying(80) NOT NULL,
    "Correo" character varying(100) NOT NULL,
    "Clave" character varying(300) NOT NULL,
    "Telefono" character varying(10),
    "Activo" boolean NOT NULL,
    "FechaHoraCreacion" TIMESTAMP,
    "UsuarioCreacion" character varying(50),
    "FechaHoraModificacion" TIMESTAMP,
    "UsuarioModificacion" character varying(50),
    FOREIGN KEY ("idRol") REFERENCES public.tb_roles("idRol")
);

/** SPRINT 2 **/
/* 
-- Categoria Producto
CREATE TABLE public.tb_categoria_producto (
    "idCategoria" BIGSERIAL PRIMARY KEY,
    "Nombre" character varying(50) NOT NULL,
    "Activo" boolean NOT NULL,
    "FechaHoraCreacion" TIMESTAMP,
    "UsuarioCreacion" character varying(100),
    "FechaHoraModificacion" TIMESTAMP,
    "UsuarioModificacion" character varying(100)
);

-- Subcategoria Producto
CREATE TABLE public.tb_subcategoria_producto (
    "idSubCategoria" BIGSERIAL PRIMARY KEY,
    "idCategoria" BIGSERIAL NOT NULL,
    "Nombre" character varying(50) NOT NULL,
    "Activo" boolean NOT NULL,
    "FechaHoraCreacion" TIMESTAMP,
    "UsuarioCreacion" character varying(100),
    "FechaHoraModificacion" TIMESTAMP,
    "UsuarioModificacion" character varying(100),
    FOREIGN KEY ("idCategoria") REFERENCES public.tb_categoria_producto("idCategoria")
);

-- Tipo Producto
CREATE TABLE public.tb_tipo_producto (
    "idTipoProducto" BIGSERIAL PRIMARY KEY,
    "Nombre" character varying(50) NOT NULL,
    "Activo" boolean NOT NULL,
    "FechaHoraCreacion" TIMESTAMP,
    "UsuarioCreacion" character varying(100),
    "FechaHoraModificacion" TIMESTAMP,
    "UsuarioModificacion" character varying(100)
);

-- Productos
CREATE TABLE public.tb_productos (
    "idProducto" BIGSERIAL PRIMARY KEY,
    "CodigoSKU" character varying(50) NOT NULL,
    "Stock" integer NULL,
    "Nombre" character varying(300) NOT NULL,
    "Presentacion" character varying(20) NOT NULL,
    "idCategoria" BIGINT NOT NULL, -- Relación directa con categoría
    "idSubCategoria" BIGINT NULL, -- Puede ser NULL si no hay subcategoría
    "idTipoProducto" BIGINT NULL, -- Puede ser NULL si no hay tipo de producto
    "idUsuario" BIGINT NOT NULL,
    "Activo" boolean NOT NULL,
    "FechaHoraCreacion" TIMESTAMP,
    "UsuarioCreacion" character varying(100),
    "FechaHoraModificacion" TIMESTAMP,
    "UsuarioModificacion" character varying(100),
    FOREIGN KEY ("idCategoria") REFERENCES public.tb_categoria_producto("idCategoria"),
    FOREIGN KEY ("idSubCategoria") REFERENCES public.tb_subcategoria_producto("idSubCategoria"),
    FOREIGN KEY ("idTipoProducto") REFERENCES public.tb_tipo_producto("idTipoProducto"),
    FOREIGN KEY ("idUsuario") REFERENCES public.tb_usuarios("idUsuario")
);
 */