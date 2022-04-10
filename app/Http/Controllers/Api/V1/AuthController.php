<?php
declare(strict_types=1);

namespace App\Http\Controllers\Api\V1;

use App\Http\Requests\Api\V1\LoginRequest;
use App\Http\Requests\Api\V1\RegisterRequest;
use App\Models\Role;
use App\Models\User;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class AuthController extends ApiV1Controller
{

    public function register(RegisterRequest $registerRequest)
    {
        /** @var Role $role */
        $role = Role::firstOrCreate(['name' => 'default']);

        /** @var User $user */
        $user = User::create([...$registerRequest->validated(), 'role_id' => $role->id]);
        Auth::login($user);
        // TODO fix loading role
        return $user->load('role');
    }

    /**
     * @param LoginRequest $loginRequest
     * @return User|Authenticatable|Application|ResponseFactory|Response
     */
    public function login(LoginRequest $loginRequest)
    {
        // TODO add remember option
        if (Auth::attempt($loginRequest->validated()) && ($user = Auth::user())) {
            return $user->load('role');
        }
        //TODO add translation
        return response(['errors' => ['email' => ['Invalid credentials']]], 401);
    }

    public function user()
    {
        if ($user = Auth::user()) {
            return $user->load('role');
        }
        abort(401);
    }

    /**
     * @return void
     */
    public function logout()
    {
        Auth::logout();
        Session::regenerate();
    }
}
