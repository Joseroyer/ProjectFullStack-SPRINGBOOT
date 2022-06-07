PGDMP         +                z            piadas    10.20    10.20                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false            	           1262    18334    piadas    DATABASE     �   CREATE DATABASE piadas WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Portuguese_Brazil.1252' LC_CTYPE = 'Portuguese_Brazil.1252';
    DROP DATABASE piadas;
             postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
             postgres    false            
           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                  postgres    false    3                        3079    12924    plpgsql 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;
    DROP EXTENSION plpgsql;
                  false                       0    0    EXTENSION plpgsql    COMMENT     @   COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';
                       false    1            �            1259    18335 	   categoria    TABLE     c   CREATE TABLE public.categoria (
    cat_id integer NOT NULL,
    cat_nome character varying(20)
);
    DROP TABLE public.categoria;
       public         postgres    false    3            �            1259    18338    categoria_cat_id_seq    SEQUENCE     �   CREATE SEQUENCE public.categoria_cat_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.categoria_cat_id_seq;
       public       postgres    false    3    196                       0    0    categoria_cat_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.categoria_cat_id_seq OWNED BY public.categoria.cat_id;
            public       postgres    false    197            �            1259    18340    piada    TABLE     �   CREATE TABLE public.piada (
    pi_id integer NOT NULL,
    pi_titulo character varying(80),
    pi_texto text,
    pi_keywords character varying(100),
    pi_ranking integer,
    cat_id integer,
    us_cod integer
);
    DROP TABLE public.piada;
       public         postgres    false    3            �            1259    18346    piada_pi_id_seq    SEQUENCE     �   CREATE SEQUENCE public.piada_pi_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.piada_pi_id_seq;
       public       postgres    false    3    198                       0    0    piada_pi_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.piada_pi_id_seq OWNED BY public.piada.pi_id;
            public       postgres    false    199            �            1259    18361    usuario    TABLE     �   CREATE TABLE public.usuario (
    us_cod integer NOT NULL,
    us_nome character varying(100),
    us_email character varying(100),
    us_senha character varying(100)
);
    DROP TABLE public.usuario;
       public         postgres    false    3            �            1259    18359    usuario_us_cod_seq    SEQUENCE     �   ALTER TABLE public.usuario ALTER COLUMN us_cod ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.usuario_us_cod_seq
    START WITH 0
    INCREMENT BY 1
    MINVALUE 0
    NO MAXVALUE
    CACHE 1
);
            public       postgres    false    201    3            {
           2604    18348    categoria cat_id    DEFAULT     t   ALTER TABLE ONLY public.categoria ALTER COLUMN cat_id SET DEFAULT nextval('public.categoria_cat_id_seq'::regclass);
 ?   ALTER TABLE public.categoria ALTER COLUMN cat_id DROP DEFAULT;
       public       postgres    false    197    196            |
           2604    18349    piada pi_id    DEFAULT     j   ALTER TABLE ONLY public.piada ALTER COLUMN pi_id SET DEFAULT nextval('public.piada_pi_id_seq'::regclass);
 :   ALTER TABLE public.piada ALTER COLUMN pi_id DROP DEFAULT;
       public       postgres    false    199    198            �
          0    18335 	   categoria 
   TABLE DATA               5   COPY public.categoria (cat_id, cat_nome) FROM stdin;
    public       postgres    false    196   8                  0    18340    piada 
   TABLE DATA               d   COPY public.piada (pi_id, pi_titulo, pi_texto, pi_keywords, pi_ranking, cat_id, us_cod) FROM stdin;
    public       postgres    false    198   �                 0    18361    usuario 
   TABLE DATA               F   COPY public.usuario (us_cod, us_nome, us_email, us_senha) FROM stdin;
    public       postgres    false    201   s$                  0    0    categoria_cat_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.categoria_cat_id_seq', 6, true);
            public       postgres    false    197                       0    0    piada_pi_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.piada_pi_id_seq', 57, true);
            public       postgres    false    199                       0    0    usuario_us_cod_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.usuario_us_cod_seq', 70, true);
            public       postgres    false    200            ~
           2606    18351    categoria categoria_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.categoria
    ADD CONSTRAINT categoria_pkey PRIMARY KEY (cat_id);
 B   ALTER TABLE ONLY public.categoria DROP CONSTRAINT categoria_pkey;
       public         postgres    false    196            �
           2606    18353    piada piada_pkey 
   CONSTRAINT     Q   ALTER TABLE ONLY public.piada
    ADD CONSTRAINT piada_pkey PRIMARY KEY (pi_id);
 :   ALTER TABLE ONLY public.piada DROP CONSTRAINT piada_pkey;
       public         postgres    false    198            �
           2606    18365    usuario usuario_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (us_cod);
 >   ALTER TABLE ONLY public.usuario DROP CONSTRAINT usuario_pkey;
       public         postgres    false    201            �
           2606    18354    categoria categoria_cat_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.categoria
    ADD CONSTRAINT categoria_cat_id_fkey FOREIGN KEY (cat_id) REFERENCES public.categoria(cat_id) NOT VALID;
 I   ALTER TABLE ONLY public.categoria DROP CONSTRAINT categoria_cat_id_fkey;
       public       postgres    false    196    196    2686            �
           2606    18366    piada fk_us_cod    FK CONSTRAINT     s   ALTER TABLE ONLY public.piada
    ADD CONSTRAINT fk_us_cod FOREIGN KEY (us_cod) REFERENCES public.usuario(us_cod);
 9   ALTER TABLE ONLY public.piada DROP CONSTRAINT fk_us_cod;
       public       postgres    false    2690    198    201            �
   G   x�3����,J�2�,�/*)M/=���˘3%�,��8��˄317��˔�,3%�ˌ3�(?-��81�+F��� ��          �  x��WMoG=���R�c��%[0l0�ga��,A�K�lR-�LO�g��O��k���a>�'�?�/ɫ�R�u��u�1��S�^�j��9�f��z4��-�����?m�ξ1�}8s�.�/o����v�~��8vTښi��g���C����W���
M�����=�D#���^5��uJ?5\.,�\,�mh��hnsNɆ�*�VM���m '����涰��f��q<2E�܇ON�ʖ}���F�~��<~���
ҐTڅpY����~��N�����[j����*�ͯ L��3 ��\���Y9��5��m+��w̤���x{�k��}tcZ���
k�H���� �<	w����J{O�'���(��0�@MH�K�
��o�/E�aa���Gp�te<�rm|�i�s)��<�5юR���M���c�b�/� KdJ�E��n?��-�
�6���ʒ����	������$��SJg'��x~u>I�|r�tBjm�.�\�E�_iD��+�}uf�:����Jտ��X�#����J�A�A�����D;���y@��'aQ�;�vA,x�Ug�=��S�VPG�i�OK~� ����A�yy���M~H�v��F`�5Yq�E�f�xp˝gR�$fj�0�α��,�]Ip��-7.��_t~r�+�[�6f�]Iz8J�����\�Q�䙼�k���5CS ��@Vr�C#༐��\T�'�l�s�q�]`Ϥ�$��Q��_�����;oj�ҏ��,SǦ���
�e�Ј����K�w�ĵ�\b��w
����P�Z��b@A�Qd�tFK-4����Q�o`kj���3Wf�$����} � ļq��M(aO�P�a�,o8�噞ay���=�?���MI�Ã$�o����t<gjo����\q��4)�Y�h�"&�fQ��2�[���4�|�ȒzBz�쫋�.�w~���}�\s&�\�m.�s�H�� �!US���X�I3Ee�4��������� �r��`5��M��J�v��4a�,Qz��� 
be+j��<V�a�ɜ��HNvB1��
�����^�0�.��PqA�bpg����ܾ��@�fG���^co��N��1��U�q2VϬ��[�Z��\V|(�%�sms�;� S��	P�mj׃���	�2M�E�b��g�uU���d�&M-�\��G/�=��b�l�$[Y#�A|�l7�q����7�����ɛUi�f.�u���CHw��&c��XN%V��B�,�d:b�Yv츀��Ŋ�W��{=�To�R�I��&+��[Xf���\l����"� �('fr����u�i:��-`LO�S &��O��M���*�F���/���!��<Ѵ7='�ȃ,�vNr�.�M'"mSޒ�<����zi� ~қ��КA碆L9n �{,T�%���x�سR5Lk����0�Q�����eVN_��c��2ɂ���`��t̍��$����ԤamG������z�\�f���ټ���TNݹ\5���Y�6�fe���́Ҁ�^��L{���`r�S�'0s.#|��k�OP���bD�>B]�j~��q�Z��׭��""��$�]\�����Փ�T#�][\�.���r��!C<vߧ�?�v�$^�7�E]��8����oD������[�;a��7�����se B��i�%.���Bsv4�.�y?��3ٳ���:��9:��|9H��*~V�         R  x�uT�o�0~>��������ѬU��X�M}1�I!79	[�����:�g������>���K�{e�S��e���`H��D@��VG�4�ڻ���C  #7���͛�ڭ7�><���ё<�v�����R5yT���#���?��ȃ��f�]xO��˪��ߚ�᧖ѧ�p$6�vXk��c�p"��`3_$4Mf����b�Ȁ���)'���d�sI}���z1���ض�,,L�W��B�~�B:_i�"�����u�B���S{+�;>[眻�#��lf�^�݀]d��{�m�)���p��b�*�i㓀�:󺓜�g�=\>�����4��+TC�]����m6��W�Cj��Eٕ��>�*+�qVA6���R��W����}�Թ��o�F��R�V��gm�* ��?{H0���	�Hhh�i�Z�.�ڋ�%�q�OT�PC]!�V��B��:~l�l���Yic�^�'��q��k��靦�
�t�/2��m�´ҦŚ>v�A�&�5��2�%b�ﳇ	M�?���.��ؽj{�c7���t����J4��&�&�0Ӯz�I]�c8�`|@^z����[�     