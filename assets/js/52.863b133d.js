(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{360:function(s,e,a){"use strict";a.r(e);var n=a(43),t=Object(n.a)({},function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h4",{attrs:{id:"generate-ssh-keys-to-log-into-linux-vm-with-cloud-shell"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generate-ssh-keys-to-log-into-linux-vm-with-cloud-shell","aria-hidden":"true"}},[s._v("#")]),s._v(" Generate SSH keys to log into Linux VM with Cloud Shell")]),s._v(" "),a("p",[s._v("For these instructions, I'll assume you have a Linux VM already setup and connecting via Cloud Shell.")]),s._v(" "),a("p",[s._v("1.) Log into Azure Cloud Shell and type "),a("code",[s._v("ssh-keygen -t rsa -b 2048")]),s._v(". Accept all default by pressing enter. It has generated a public key that is stored in "),a("code",[s._v("/home/michael/.ssh/id_rsa.pub.")]),s._v(" as shown below.")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("michael@Azure:~/clouddrive$ ssh-keygen -t rsa -b 2048\nGenerating public/private rsa key pair.\nEnter file in which to save the key (/home/michael/.ssh/id_rsa):\nCreated directory '/home/michael/.ssh'.\nEnter passphrase (empty for no passphrase):\nEnter same passphrase again:\nYour identification has been saved in /home/michael/.ssh/id_rsa.\nYour public key has been saved in /home/michael/.ssh/id_rsa.pub.\nThe key fingerprint is:\nSHA256:FHZVjZfU0zZaXoEvbg37/YUW+02VMIXl6UtUIumpHs0 michael@cc-72f9-63c154d-32136390-qk3bs\nThe key's randomart image is:\n+---[RSA 2048]----+\n|        o ..ooBB*|\n|       . o  .++*X|\n|        .  . +=*+|\n|       .    o+=o.|\n|        S  +. *+.|\n|          o E+.=o|\n|         . .. =.+|\n|          .  . ++|\n|                =|\n+----[SHA256]-----+\nmichael@Azure:~/clouddrive$\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("p",[s._v("2.) Ensure the key was generated by typing "),a("code",[s._v("ls -a")]),s._v(".")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("michael@Azure:~$ ls -a\n.  ..  .azure  .bash_history  .bash_logout  .bashrc  clouddrive  .profile  .ssh\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("3.) Looks good (we see "),a("code",[s._v(".ssh")]),s._v("), we'll go ahead and copy it to our server with "),a("code",[s._v("scp ~/.ssh/id_rsa.pub user@ipaddy:")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("michael@Azure:~$ scp ~/.ssh/id_rsa.pub user@ipaddy:\nmbcrump@52.161.31.243's password:\nid_rsa.pub                                                                                                                                                                                                               100%  420     0.4KB/s   00:00\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("4.) SSH to the Linux server with "),a("code",[s._v("ssh user@ipaddy")]),s._v(".")]),s._v(" "),a("p",[s._v("5.) Append the public key to authorized_keys "),a("code",[s._v("cat id_rsa.pub >> ~/.ssh/authorized_keys")]),s._v(" and then remove the file with "),a("code",[s._v("rm id_rsa.pub")]),s._v(".")]),s._v(" "),a("p",[s._v("6.) Edit the ssh server configuration file with "),a("code",[s._v("sudo nano /etc/ssh/sshd_config")]),s._v(".")]),s._v(" "),a("p",[s._v("6.1) These entries must be set to yes and they should already be that way by default:\nRSAAuthentication yes\nPubkeyAuthentication yes")]),s._v(" "),a("p",[s._v("7.) Reload the configuration with "),a("code",[s._v("sudo service ssh reload")]),s._v(".")]),s._v(" "),a("p",[s._v("8.) Disconnect and try to connect without the need to give the password to the ssh-client "),a("code",[s._v("ssh user@ipaddy")]),s._v(".")]),s._v(" "),a("p",[s._v("9.) If everything goes as planned, you should see:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("michael@Azure:~$ ssh user@ipaddy\nWelcome to Ubuntu 16.04.3 LTS (GNU/Linux 4.4.0-92-generic x86_64)\n\t\n * Documentation:  https://help.ubuntu.com\n * Management:     https://landscape.canonical.com\n * Support:        https://ubuntu.com/advantage\n\t\n  Get cloud support with Ubuntu Advantage Cloud Guest:\n    http://www.ubuntu.com/business/services/cloud\n\t\n15 packages can be updated.\n0 updates are security updates.\n\t\n\t\n*** System restart required ***\nLast login: Sun Sep 10 23:49:35 2017 from 40.83.147.69\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("img",{attrs:{src:s.$withBase("/files/cloudshellpersistdata.gif")}}),s._v(" "),a("h4",{attrs:{id:"bonus-if-you-want-to-disable-the-password-you-previously-set-on-the-linux-machine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bonus-if-you-want-to-disable-the-password-you-previously-set-on-the-linux-machine","aria-hidden":"true"}},[s._v("#")]),s._v(" BONUS: If you want to disable the password you previously set on the Linux machine")]),s._v(" "),a("p",[s._v("If you want to disable the password on the Linux machine that you previously set:")]),s._v(" "),a("p",[s._v("1.) SSH back into the machine with "),a("code",[s._v("ssh user@ipaddy")]),s._v(".")]),s._v(" "),a("p",[s._v("2.) Disable password authentication with "),a("code",[s._v("sudo nano /etc/ssh/sshd_config")]),s._v(".")]),s._v(" "),a("p",[s._v("2.1) Ensure the following settings should are set to no:")]),s._v(" "),a("pre",[a("code",[s._v("ChallengeResponseAuthentication no\nPasswordAuthentication no\nUsePAM no\n")])]),s._v(" "),a("p",[s._v("2.2.) Reload the configuration with "),a("code",[s._v("sudo service ssh reload")])]),s._v(" "),a("p",[s._v("3.) You can see if the password authentication is disabled by logging out and then trying to connect with key file authentication disabled with "),a("code",[s._v("ssh user@ipaddress -o PubkeyAuthentication=no")]),s._v('. You should get "Permission denied".')]),s._v(" "),a("h4",{attrs:{id:"bonus-2-you-can-easily-do-the-same-with-bash-on-windows-10"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bonus-2-you-can-easily-do-the-same-with-bash-on-windows-10","aria-hidden":"true"}},[s._v("#")]),s._v(" BONUS #2: You can easily do the same with BASH on Windows 10")]),s._v(" "),a("p",[s._v("You can have the same goodness that you have with Azure Cloud Shell on your local machine. In my case, I'm using BASH on Windows and can just run steps 1-5 listed above. Boom!")])])},[],!1,null,null,null);e.default=t.exports}}]);