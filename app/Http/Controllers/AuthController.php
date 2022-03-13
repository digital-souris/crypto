<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterFormRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\JWTAuth;

class AuthController extends Controller
{
    public function register(RegisterFormRequest $request) {
		$user = new User();
		$user->email = $request->email;
		$user->name = $request->name;
		$user->password = bcrypt($request->password);
		$user->save();
		return response([
			'status' => 'success',
			'data' => $user
		], 200);
	}

	public function login(Request $request): \Illuminate\Http\JsonResponse
	{
		$validator = Validator::make($request->all(), [
			'email' => 'required|email',
			'password' => 'required|string|min:6',
		]);
		if ($validator->fails()) {
			return response()->json($validator->errors(), 422);
		}
		if (! $token = auth()->attempt($validator->validated())) {
			return response()->json(['error' => 'Unauthorized'], 401);
		}
		return $this->createNewToken($token);
	}
	public function user(Request $request)
	{
		$user = User::find(auth()->id());
		return response([
			'status' => 'success',
			'data' => $user
		]);
	}
	public function refresh() {
		return $this->createNewToken(auth()->refresh());
	}
	public function logout(): \Illuminate\Http\JsonResponse
	{
		auth()->logout();
		return response()->json(['message' => 'User successfully signed out']);
	}

	protected function createNewToken($token): \Illuminate\Http\JsonResponse
	{
		return response()->json([
			'access_token' => $token,
			'token_type' => 'bearer',
			'expires_in' => auth()->factory()->getTTL() * 60,
			'user' => auth()->user()
		]);
	}
}
