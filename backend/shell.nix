
{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  # Make C++ runtime (libstdc++) visible for PyTorch
  LD_LIBRARY_PATH = "${pkgs.stdenv.cc.cc.lib}/lib";

  buildInputs = [
    pkgs.python3
    pkgs.python3Packages.pip
    pkgs.python3Packages.setuptools
    pkgs.python3Packages.wheel

    # Required for PyTorch
    pkgs.gcc
    pkgs.stdenv.cc.cc.lib   # Provides libstdc++.so.6
    pkgs.glibc               # Provides libc, libm, etc.
  ];
}
