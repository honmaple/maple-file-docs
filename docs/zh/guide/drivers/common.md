# 公共参数

## 基础参数
- **存储类型**: 可选本地存储、S3、Webdav、FTP、SFTP、SMB、又拍云、Alist、Mirror
- **存储名称**: -
- **存储状态**: 当存储状态未激活时，该存储不会显示到文件列表中
- **挂载目录**: 指文件列表显示的目录，默认挂载到根目录 `/`，如果想要挂载某个存储的指定目录，需要设置 **根目录** 而不是 **挂载目录**

## 更多设置
- **根目录**: 挂载存储内的某个具体目录，比如 **Alist** 存储，根目录为 `/移动硬盘`, 则访问Alist存储时只能访问`/移动硬盘`下的文件

### 文件加密
- **文件加密**：是否激活文件加密
- **文件密码**：文件加密密码，不能为空
- **文件后缀**：默认为空，当设置为 `.bin` 时，加密后的文件，文件名称会自动添加 `.bin` 后缀
- **文件密码加密**：默认和文件密码相同，类似二次密码
- **文件名称加密**：默认不加密，文件名称将会以明文显示(但内容是加密的)，激活后加密后的名称会出现 `LKXPGd-ub3Jyu9msrZM5F2EETxxx` 等形式
- **目录名称加密**：默认不加密，加密后的名称同上

### 文件压缩
- **文件压缩**：是否激活文件压缩
- **压缩水平**：可选**默认**、**压缩率最高**、**压缩速度最快**三种方式

### 文件缓存
- **文件缓存**：是否激活文件缓存
- **缓存时间**：默认为**60秒**，60秒后自动清除缓存

### 回收站
- **回收站**：是否激活回收站
- **回收站路径**：默认为空，为空时将会在存储的根路径创建一个名为 `.maplerecycle` 的目录。回收站路径应当尽量避免使用常用的子路径，比如常用 `/a/b`, 则不要设置回收站路径为 `/a/b` 目录下的路径，否则删除目录转为移动目录时会出现问题